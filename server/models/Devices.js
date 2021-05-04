const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    require: true
  },
  deviceId: { //rpi id the user put in 
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('Device', DeviceSchema)
