const { BookService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await BookService.getById(id);
    if(!books) {
      return res.status(404).json({ message: 'Book not found' })
    }
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' })
  }
}

const createBook = async (req, res) => {
  const { title, author, pageQuantity} = req.body;
  const books = await BookService.createBook(title, author, pageQuantity)
  res.status(201).json(books);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const books = await BookService.updateBook(id, title, author, pageQuantity);
  if(!books) {
    return res.status(404).json({ message: 'Book not found' })
  }
  return res.status(200).json({ message: 'Book updated'});

}

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const books = await BookService.deleteBook(id);
  if(!books) {
    return res.status(404).json({ message: 'Book not found' })
  }
  return res.status(200).json({ message: 'Book removed'});
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
}