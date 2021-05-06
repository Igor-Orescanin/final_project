const mongoose = require('mongoose');

const WaterFlowSchema = new mongoose.Schema({
  WaterFlow: {
    type: Number,
    require: true
  },
  { timestamps: true },
  deviceId: {
    type: mongoose.ObjectId
  }

})

module.exports = mongoose.model('WaterFlow', WaterFlowSchema)
