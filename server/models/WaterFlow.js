const mongoose = require('mongoose');

const WaterFlowSchema = new mongoose.Schema({
  pin: Number,
  model: String,
  isRunning: Boolean,
  flow: Number,
  volume: Number,
  waterFlowCounter: Number,
  ts: Date,
  deviceId: {
    type: mongoose.ObjectId
  }
}

)


module.exports = mongoose.model('WaterFlow', WaterFlowSchema)
