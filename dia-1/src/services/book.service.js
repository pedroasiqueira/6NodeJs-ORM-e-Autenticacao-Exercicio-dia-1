const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const books = await Book.findByPk(id);

  return books;
};

const createBook = async (title, author, pageQuantity) => {
  const newBook = await Book.create({title, author, pageQuantity})
  return newBook;
}

const updateBook = async (id, title, author, pageQuantity) => {
  const [updateBook] = await Book.update(
    {
    title,
    author,
    pageQuantity,
    },
    { where: { id } },
  )
  console.log(updateBook, 'update')
  return updateBook;
}

const deleteBook = async (id) => {
  const deleteBooks = await Book.destroy(
    { where: { id }},
  )
  console.log(deleteBooks, 'delete');
  return deleteBooks;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}