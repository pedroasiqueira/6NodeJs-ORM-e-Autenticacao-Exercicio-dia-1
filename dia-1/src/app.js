const express = require('express');
const app = express();
const { BookController } = require('./controllers')

app.use(express.json());

app.get('/books', BookController.getAll);

module.exports = app;