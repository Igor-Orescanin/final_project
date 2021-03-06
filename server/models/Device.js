const mongoose = require('mongoose');

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
    type: Number,
    default: 20
  },
  wasteAlertThreshold: {
    type: Number,
    default: 80
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

  freeGPIOs:[]

})

module.exports = mongoose.model('Device', DeviceSchema)




