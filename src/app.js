require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const noteRouter = require('./notes/note-router')
const folderRouter = require('./folders/folder-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
    ? 'tiny'
    : "common";
app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/api/notes', noteRouter)
app.use('/api/folders', folderRouter)

// check health of server: 

app.get('/health', (req, res, next) => {
    res.send('Server is active');
})


app.use((error, req, res, next) => {
    console.log("server error:", error.message);
    res.status(error.status || 500).json({ error: error.message, }); next();
});

module.exports = app;