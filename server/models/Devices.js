const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  macAddress: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Device', DeviceSchema)
