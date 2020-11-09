require('dotenv').config();
const knex = require('knex');
const NoteService = require('./services/note-service');
const FolderService = require('./services/folder-service');

const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
})


/* THE FOLLOWING IS THE CODE IN QUESTION
 * I understand what they are doing as chunks
 * But why are they all chained in this way with .then()?
 * In case you hadn't seen it before, knex is an SQL translator they have us using.
 *  */

NoteService.getAllNotes(knexInstance)
    .then(Notes => console.log(Notes))
    .then(() =>
        NoteService.insertNote(knexInstance, {
            title: 'New title',
            modified: new Date(),
            content: 'New content',
            folderId: '1'
        })
    )
    .then(newNote => {
        console.log(newNote)
        return NoteService.updateNote(
            knexInstance,
            newNote.id,
            { title: 'Updated title' }
        ).then(() => NoteService.getById(knexInstance, newNote.id))
    })
    .then(Note => {
        console.log(Note)
        return NoteService.deleteNote(knexInstance, Note.id)
    })


FolderService.getAllFolders(knexInstance)
    .then(Folders => console.log(Folders))
    .then(() =>
        FolderService.insertFolder(knexInstance, { title: 'New title' })
    )
    .then(newFolder => {
        console.log(newFolder)
        return FolderService.updateFolder(
            knexInstance,
            newFolder.id,
            { title: 'Updated title' }
        ).then(() => FolderService.getById(knexInstance, newFolder.id))
    })
    .then(Folder => {
        console.log(Folder)
        return FolderService.deleteFolder(knexInstance, Folder.id)
    })
