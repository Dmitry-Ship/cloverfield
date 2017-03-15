const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
  title: String,
  body: String,
  images: [String],
  color: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  tags: [String],
  _user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

const autoPopulate = function (next) {
  this.populate({
    path: '_user',
    select: 'username -_id',
  });
  next();
};

noteSchema.pre('find', autoPopulate);

module.exports = mongoose.model('Note', noteSchema);
