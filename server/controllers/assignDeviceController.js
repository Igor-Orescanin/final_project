const User = require('../models/User');
const Device = require('../models/Devices');

const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const devices = await Device.find({ deviceId: req.body.deviceId }).exec();
    if (devices.length > 0) {
      //
      // const user = await User.find({ _id: })
      const { id: _id } = req.params;
      console.log(id);
    }

  } catch (e) {
    next(e);
  }
}
