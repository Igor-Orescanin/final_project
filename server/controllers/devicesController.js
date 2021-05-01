const Device = require('../models/Devices');
const createError = require("http-errors");


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
