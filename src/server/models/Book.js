const { Schema, model } = require('mongoose');

const bookSchema = model(
  'Book',
  new Schema({
    name: String,
    genre: String,
    authorId: String,
  })
);

module.exports = bookSchema;
