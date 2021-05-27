const mongoose = require('mongoose');

const DeviceSchema = new mongoose.Schema({
  deviceName: {
    type: String,
    require: true
  },
  serialNumber: {
    type: String,
    required: true,
    unique: true
  },
  cleanAlertThreshold: {
    type: Number
  },
  wasteAlertThreshold: {
    type: Number
  },
  isConnected: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.ObjectId
  }

})

module.exports = mongoose.model('Device', DeviceSchema)




