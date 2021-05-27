const express = require("express");

const router = express.Router();

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
  .get(getDevices)
  .post(addDevice) //use only for postman

router
  .route("/:id/lights")
  .get(getLightButtons)
  .post(addLightButton)

router
  .route("/:id/controls")
  .get(getControlButtons)
  .post(addControlButton)

router
  .route("/:id")
  .get(getDevice)
  .put(updateDevice)   // update the thresold level
  .delete(deleteDevice) 



module.exports = router;

