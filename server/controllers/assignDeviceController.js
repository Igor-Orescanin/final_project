const User = require('../models/User');
const Device = require('../models/Devices');

const createError = require("http-errors");
const jwt = require('jsonwebtoken');
const { log } = require('async');
require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const devices = await Device.find({ deviceId: req.body.deviceId }).exec();
    if (devices.length > 0) {
      console.log(devices);
      // const user = await User.find({ _id: })
      const { id: _id } = req.params;

      console.log(id);
    }

  } catch (e) {
    next(e);
  }
}
