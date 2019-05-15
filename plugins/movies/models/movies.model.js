const mongoose = require('mongoose')
const Schema = mongoose.Schema

var MoviesSchema = new Schema({
  title: {type: String, required: true},
  genre: {type: String, required: true},
  length: {type: String, required: false},
  language: {type: String, required: true},
  subtitles: {type: String, required: false},
  stars: {type: Number, required: false}
},
{
  collection: 'movies'
});

module.exports = mongoose.model('MoviesSchema', MoviesSchema)