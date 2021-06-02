
const Device = require('../models/Device');
const createError = require("http-errors");



require('dotenv').config();

exports.addDevice = async (req, res, next) => {
  try {
    const devices = await Device.find({ serialNumber: req.body.serialNumber }).exec();

    if (devices.length > 0) {
      // device already exists
      return res.json({
        message: "Device exists"
      });
    }

    const deviceCreate = new Device({
      deviceName: req.body.deviceName,
      serialNumber: req.body.serialNumber,
      cleanAlertThreshold: req.body.cleanAlertThreshold,
      wasteAlertThreshold: req.body.wasteAlertThreshold
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
    const device = await Device.find({userId:req.params.id}).exec() ;
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

exports.addLightButton = async (req, res, next) =>{
  console.log(req.body)
  console.log(req.params.id)
  // const device = Device.find({serialNumber:req.params.id}).then(response =>res.send(response))
 try {
   const device = await Device.findOneAndUpdate({serialNumber:req.params.id}, {hasLight: true}, {
     new: true,
   });
   if (!device){
     throw new createError.NotFound();
   } else {
     const newButton = {
       name: req.body.name,
       gpio: req.body.gpio
     }
     device.lightsButton.push(newButton)
     await device.save();
   }
   res.status(200).send(device);
 } catch (e) {
   next(e);
 }
};

exports.addControlButton = async (req, res, next) =>{
  try {
    const device = await Device.findOneAndUpdate({serialNumber:req.params.id},{hasControl: true}, {
      new: true,
    });
    if (!device){
      throw new createError.NotFound();
    } else {
      const newButton = {
        name: req.body.name,
        gpio: req.body.gpio
      }
      device.controlsButton.push(newButton)
      await device.save();
    }
    res.status(200).send(device);
  } catch (e) {
    next(e);
  }
};

exports.getLightButtons = async (req, res, next) =>{
  try {
    const lightButtons = await Device.find({serialNumber:req.params.id},"lightsButton").exec() ;
    if (!lightButtons) throw new createError.NotFound();
    res.status(200).send(lightButtons);
  } catch (e) {
    next(e);
  }
};

exports.getControlButtons = async (req, res, next) =>{
  try {
    const controlButtons = await Device.find({serialNumber:req.params.id},"controlsButton").exec() ;
    if (!controlButtons) throw new createError.NotFound();
    res.status(200).send(controlButtons);
  } catch (e) {
    next(e);
  }
};