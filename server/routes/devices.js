const express = require("express");

const router = express.Router();

const {
  addDevice,
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice
} = require('../controllers/devicesController');


router
  .route('/')
  .get(getDevices)
  // .post(addDevice);

router
  .route('/:id')
  .get(getDevice)
  .put(updateDevice)
  .delete(deleteDevice)    // aqui no necesita auth ???


module.exports = router;

