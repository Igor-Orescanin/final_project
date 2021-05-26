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
  cleanWaterLevelAlertThreshold: {
    type: Number
  },
  wasteWaterLevelAlertThreshold: {
    type: Number
  },
  isConnected: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.ObjectId
  },
  hasLight:{
    type: Boolean,
    default: false
  },
  hasControl:{
    type: Boolean,
    default: false
  },
  lightsButton:[lightsButtonSchema],

  controlsButton:[controlsButtonSchema],

})

const lightsButtonSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  gpio:{
    type: Number,
  },
  status:{
    type: Number,
    default: 1,
  }
})

const controlsButtonSchema = new mongoose.Schema({
  name:{
    type: String,
  },
  gpio:{
    type: Number,
  },
  status:{
    type: Number,
    default: 1,
  }
})

module.exports = mongoose.model('Device', DeviceSchema)




