const Device = require('../models/Device');

require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const { userId, serialNumber} = req.params;

    const {deviceName }= req.body;
    
    const device = await Device.findOne({ serialNumber }).exec();
     if (!device) {
      return res.json({ message:'Device not found'});
     }
    if (device.userId) {
     return res.json({ message:'Device is already assigned'});
    }
    await Device.findByIdAndUpdate(device._id, { userId, deviceName}, {
      new: true,
      useFindAndModify: false
    });

    res.status(200).send();

  } catch (e) {
    next(e);
  }
}
