const WaterFlow = require('../models/WaterFlow');

require('dotenv').config();


exports.getWaterFlowSensors = async (req, res, next) => {
  try {
    const devices = await WaterFlow.find();
    res.status(200).send(devices);
  } catch (e) {
    next(e);
  }
}


exports.getDataByDate = async (req, res, next) => {
  try {
    const { startDate, endDate } = req.query;
    console.log('startDate', startDate);
    console.log('endDate', endDate);
    const gettingData = await WaterFlow.find({ "ts": { $gte: Date.parse(startDate), $lte: Date.parse(endDate) } })
    res.status(200).send(gettingData);
  } catch (e) {
    next(e);
  }
}
