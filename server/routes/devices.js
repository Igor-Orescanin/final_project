const express = require("express");

const router = express.Router();

const {
  addDevice,  // disable, the admin only can add RPI devices to the DB
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice
} = require('../controllers/devicesController');


router
  .route('/') 
  .get(getDevices)
  .post(addDevice);


router
  .route('/:id')
  .get(getDevice)
  .put(updateDevice)
  .delete(deleteDevice)


module.exports = router;

