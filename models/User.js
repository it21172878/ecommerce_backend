const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, tequired: true },
    email: { type: String, tequired: true, unique: true },
    password: { type: String, tequired: true },
    location: { type: String, default: 'Sri Lanka' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
