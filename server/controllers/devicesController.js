
const Device = require('../models/Device');
const createError = require("http-errors");
const { log } = require('async');


require('dotenv').config();

exports.addDevice = async (req, res, next) => {
  try {
    const devices = await Device.find({ serialNumber: req.body.serialNumber }).exec();

    if (devices.length > 0) {
      // device already exists
      return res.status(409).json({
        message: "Device exists"
      });
    }

    const deviceCreate = new Device({
      deviceName: req.body.deviceName,
      serialNumber: req.body.serialNumber,
      cleanWaterLevelAlertThreshold: req.body.cleanWaterLevelAlertThreshold,
      wasteWaterLevelAlertThreshold: req.body.wasteWaterLevelAlertThreshold
    });

    await deviceCreate.save();

    res.status(200).send(deviceCreate);
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
      new: true,

    });

    if (!device) throw new createError.NotFound();
    res.status(200).send(device);

    console.log(device.cleanWaterLevelAlertThreshold);

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
