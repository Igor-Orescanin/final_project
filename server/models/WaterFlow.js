const mongoose = require('mongoose');

const WaterFlowSchema = new mongoose.Schema({
  deviceWaterFlowId: {
    type: String,
    require: true
  },
  deviceRpiId: {
    type: mongoose.ObjectId
  }
},

  { timestamps: true }
)

module.exports = mongoose.model('WaterFlow', WaterFlowSchema)
