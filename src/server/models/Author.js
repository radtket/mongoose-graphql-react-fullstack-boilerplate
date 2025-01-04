const { Schema, model } = require('mongoose');

const authorSchema = model(
  'Author',
  new Schema({
    name: String,
    age: Number,
  })
);

module.exports = authorSchema;
