const User = require('../models/User');
const Device = require('../models/Device');

const createError = require("http-errors");
const jwt = require('jsonwebtoken');

require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const { userId, deviceId } = req.params;

    const device = await Device.findOne({ deviceId }).exec();
    if (!device) {
      throw new Error('Device not found');
    }
    if (device.userId) {
      throw new Error('Device is already assigned');
    }
    await Device.findByIdAndUpdate(device._id, { userId }, {
      new: true,
      useFindAndModify: false
    });

    res.status(200).send();

  } catch (e) {
    next(e);
  }
}
