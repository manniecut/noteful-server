require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const NoteService = require('./services/note-service')
const FolderService = require('./services/folder-service')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : "common";
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, world!')
})

app.get('/notes', (req, res) => {
    const knexInstance = req.app.get('db')
    NoteService.getAllNotes(knexInstance)
        .then(articles => {
            res.json(articles)
        })
        .catch(next)
})

app.get('/notes/:note_id', (req, res, next) => {
    const knexInstance = req.app.getById(knexInstance, req.params.note_id)
        .then(note => {
            res.json(note)
        })
        .catch(next)
})

app.post('/notes', (req, res, next) => {
    const { title, content, folderId }
    const newNote = { title, content, folderId }
    NoteService.insertNote(
        req.app.get('db'),
        newNote
    )
        .then(note => {
            res.status(201).json(note)
        })
        .catch(next)
})

app.get('/folders', (req, res) => {
    res.send('All folders')
})

app.use(function errorHandler(error, req, res, next) {
    let response
    if (NODE_ENV === 'production') {
        response = { error: { message: 'server error' } }
    } else {
        console.error(error)
        response = { message: error.message, error }
    }
})

module.exports = app;