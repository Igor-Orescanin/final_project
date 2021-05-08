const mongoose = require('mongoose');

const WaterFlowSchema = new mongoose.Schema({
  pin: Number,
  model: String,
  isRunning: Boolean,
  flow: Number,
  volume: Number,
  waterFlowCounter: Number,
  ts: Date,
  userId: {
    type: mongoose.ObjectId
  }
},
  { timestamps: true },

)


module.exports = mongoose.model('WaterFlow', WaterFlowSchema)
