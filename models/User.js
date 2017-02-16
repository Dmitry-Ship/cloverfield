const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  fullName: String,
  email: { type: String, required: true },
  password: { type: String, required: true },
  userpic: String,
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
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
