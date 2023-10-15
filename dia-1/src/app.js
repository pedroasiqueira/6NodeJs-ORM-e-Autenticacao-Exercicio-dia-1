const express = require('express');
const app = express();
const { BookController } = require('./controllers')

app.use(express.json());

app.get('/books', BookController.getAll);
app.get('/books/:id', BookController.getById);
app.post('/books/', BookController.createBook);
app.put('/books/:id', BookController.updateBook);
app.delete('/books/:id', BookController.deleteBook);

module.exports = app;