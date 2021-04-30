const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    require: true
  },
  macAddress: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('mytable', signUpTemplate)
