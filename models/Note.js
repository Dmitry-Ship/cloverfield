const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: String,
  content: String,
  color: String,
  createdAt: { type: Date, default: Date.now },
  tags: [String],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Note', noteSchema);
