const Device = require('../models/Devices');
const createError = require("http-errors");

require('dotenv').config();

exports.addDevice = async (req, res, next) => {
  try {
    const devices = await Device.find({ deviceId: req.body.deviceId }).exec();

    if (devices.length > 0) {
      // device already exists
      return res.json(409).json({
        message: "Device exists"
      });
    }

    const device = new Device({
      deviceName: req.body.deviceName,
      deviceId: req.body.deviceId
    });

    await device.save();

    res.status(200).send(device);
  } catch (e) {
    next(e);
  }
};


exports.getDevices = async (req, res, next) => {
  try {
    const devices = await Device.find();
    res.status(200).send(devices);
  } catch (e) {
    next(e);
  }
};

exports.getDevice = async (req, res, next) => {
  try {
    const device = await Device.findById(req.params.id);
    if (!device) throw new createError.NotFound();
    res.status(200).send(device);
  } catch (e) {
    next(e);
  }
};

exports.updateDevice = async (req, res, next) => {
  try {
    const device = await Device.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!device) throw new createError.NotFound();
    res.status(200).send(device);
  } catch (e) {
    next(e);
  }
};


exports.deleteDevice = async (req, res, next) => {
  try {
    const device = await Device.findByIdAndDelete(req.params.id);
    if (!device) throw new createError.NotFound();
    res.status(200).send(device);
  } catch (e) {
    next(e);
  }
};
