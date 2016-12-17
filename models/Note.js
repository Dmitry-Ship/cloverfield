const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const noteSchema = new Schema({
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
  // ,
  // user: {
  //   type: Schema.ObjectId,
  //   ref: 'users'
  // }
});
module.exports = mongoose.model('Note', noteSchema)