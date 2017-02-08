const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  userpic: String,
  date: {
    type: Date,
    default: Date.now,
  },
  notes: [{
    type: [mongoose.Schema.ObjectId],
    ref: 'Note',
  }],
});


userSchema.pre('save', function (next) {
  const user = this;
  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(10, (err, salt) => {
      if (err) { return next(err); }
      return bcrypt.hash(user.password, salt, null, (err, hash) => {
        if (err) { return next(err); }
        user.password = hash;
        return next();
      });
    });
  } else {
    return next();
  }
});

userSchema.methods.comparePassword = function (candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) { return cb(err); }
    return cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
