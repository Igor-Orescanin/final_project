const mongoose = require('mongoose');

const WaterFlowSchema = new mongoose.Schema({
  waterFlowCounter: Number,
  ts: Date,
  deviceId: {
    type: mongoose.ObjectId
  }
}

)


module.exports = mongoose.model('WaterFlow', WaterFlowSchema)
