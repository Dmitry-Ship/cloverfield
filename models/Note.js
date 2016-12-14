const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  color: String,
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array,
    default: []
  }
});
module.exports = mongoose.model('Note', noteSchema)
