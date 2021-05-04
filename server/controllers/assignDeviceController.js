const User = require('../models/User');
const Device = require('../models/Devices');

const createError = require("http-errors");
const jwt = require('jsonwebtoken');
const { log } = require('async');
require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const { _id } = req.params;   // recibimos id del client que vamos a actualizar
    const { deviceId } = req.body; // id del dispositivo que se ingresa en el formulario
    const userUpdated = await User.findByIdAndUpdate(_id, { $push: { assignedDevices: deviceId } }, {
      new: true,
      useFindAndModify: false
    });
    if (!userUpdated) throw new createError.NotFound();
    res.status(200).send(userUpdated);


  } catch (e) {
    next(e);
  }
}
