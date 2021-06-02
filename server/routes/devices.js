const express = require("express");

const router = express.Router();

const auth = require('../middleware/auth');

const {
  addDevice,
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice,
  addLightButton,
  addControlButton,
  getLightButtons,
  getControlButtons,
} = require("../controllers/devicesController");


router
  .route("/")
  .get(auth, getDevices)
  .post(auth, addDevice) //use only for postman

router
  .route("/:id/lights")
  .get(auth, getLightButtons)
  .post(auth, addLightButton)

router
  .route("/:id/controls")
  .get(auth, getControlButtons)
  .post(auth, addControlButton)

router
  .route("/:id")
  .get(auth, getDevice)
  .put(auth, updateDevice)   // update the thresold level
  .delete(auth, deleteDevice)



module.exports = router;

