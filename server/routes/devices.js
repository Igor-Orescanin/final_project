const express = require("express");

const router = express.Router();

const {
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice
} = require('../controllers/devicesController');


router
  .route('/')
  .get(getDevices)

router
  .route('/:id')
  .get(getDevice)
  .put(updateDevice)
  .delete(deleteDevice)    // aqui no necesita auth ???


module.exports = router;

