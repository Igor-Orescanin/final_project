const Device = require('../models/Device');

require('dotenv').config();


exports.assignDevice = async (req, res, next) => {
  try {
    const { userId, serialNumber } = req.params;

    const device = await Device.findOne({ serialNumber }).exec();
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
