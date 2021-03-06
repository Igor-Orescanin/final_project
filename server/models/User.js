const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },
  resetLink: {
    data: String,
    default: ''
  }
})

module.exports = mongoose.model('User', UserSchema)
