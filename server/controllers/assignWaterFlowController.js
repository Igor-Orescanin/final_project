const WaterFlow = require('../models/WaterFlow');

require('dotenv').config();


exports.addWaterFlowSensor = async (req, res, next) => {
  try {
    const devices = await WaterFlow.find({ deviceWaterFlowId: req.body.deviceWaterFlowId }).exec();

    if (devices.length > 0) {
      // device already exists
      return res.status(409).json({
        message: "Device water flow exists"
      });
    }

    const deviceCreate = new WaterFlow({
      deviceWaterFlowId: req.body.deviceWaterFlowId,
    });

    await deviceCreate.save();

    res.status(200).send(deviceCreate);
  } catch (e) {
    next(e);
  }
};


exports.getWaterFlowSensors = async (req, res, next) => {
  try {
    const devices = await WaterFlow.find();
    res.status(200).send(devices);
  } catch (e) {
    next(e);
  }
};

exports.assignWaterFlowSensor = async (req, res, next) => {
  try {
    const { deviceRpiId, deviceWaterFlowId } = req.params;

    const waterFlow = await WaterFlow.findOne({ deviceWaterFlowId }).exec();
    if (!waterFlow) {
      throw new Error('WaterFlow Device not found');
    }
    if (waterFlow.deviceRpiId) {
      throw new Error('Water flow is already assigned');
    }
    await WaterFlow.findByIdAndUpdate(waterFlow._id, { deviceRpiId }, {
      new: true,
      useFindAndModify: false
    });

    res.status(200).send();

  } catch (e) {
    next(e);
  }
}
