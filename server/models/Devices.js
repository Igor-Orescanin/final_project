const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    require: true
  },
  deviceId: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Device', DeviceSchema)
