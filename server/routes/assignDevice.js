const express = require("express");

const router = express.Router();

const auth = require('../middleware/auth');

const {
  assignDevice
} = require('../controllers/assignDeviceController');

router
  .route('/assignDevice')
  .post(assignDevice)

module.exports = router;
