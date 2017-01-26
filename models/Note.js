const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: String,
  content: { type: String, required: true },
  image: String,
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  tags: [String],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Note', noteSchema);
