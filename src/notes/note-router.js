const path = require('path')
const express = require('express')
const xss = require('xss')
const NoteService = require('./note-service')

const noteRouter = express.Router()
const jsonParser = express.json()

noteRouter
    .route('/')
    .get((req, res, next) => {
        NoteService.getAllNotes(
            req.app.get('db')
        )
            .then(note => {
                res.json({
                    id: note.id,
                    title: xss(note.title),
                    modified: note.modified,
                    content: xss(note.content),
                    folderId: note.folderId

                })
            })
            .catch(next)
    })
    .post(jsonParser, (req, res, next) => {
        const { title, content, folderId } = req.body
        const newNote = { title, content, folderId }

        for (const [key, value] of Object.entries(newNote)) {
            if (value == null) {
                return res.status(400).json({
                    error: { message: `Missing '${key}' in request body` }
                })
            }
        }

        NoteService.insertNote(
            req.app.get('db'),
            newNote
        )
            .then(note => {
                res
                    .status(201)
                    .location(path.posix.join(req.originalUrl, `/${note.id}`))
                    .json(note)
            })
            .catch(next)
    })

noteRouter
    .route('/:note_id')
    .all((req, res, next) => {
        NoteService.getById(
            req.app.get('db'),
            req.params.note_id
        )
            .then(note => {
                if (!note) {
                    return res.status(404).json({
                        error: { message: `Note doesn't exist` }

                    })
                }
                res.note = note
                next()
            })
            .catch(next)
    })
    .get((req, res, next) => {
        res.json({
            id: note.id,
            title: xss(note.title),
            modified: note.modified,
            content: xss(note.content),
            folderId: note.folderId
        })
    })
    .delete((req, res, next) => {
        NoteService.deleteNote(
            req.app.get('db'),
            req.params.note_id
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })
    .patch(jsonParser, (req, res, next) => {
        const { title, content, folderId } = req.body
        const noteToUpdate = { title, content, folderId }

        if (!noteToUpdate.title)
            return res.status(400).json({
                error: {
                    message: `Request body must contain 'title'`
                }
            })
        NoteService.updateNote(
            req.app.get('db'),
            req.params.note_id,
            noteToUpdate
        )
            .then(numRowsAffected => {
                res.status(204).end()
            })
            .catch(next)
    })

module.exports = noteRouter;