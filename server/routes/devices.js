const express = require("express");

const router = express.Router();

const {
  addDevice,
  getDevices,
  getDevice,
  updateDevice,
  deleteDevice
} = require("../controllers/devicesController");


router
  .route("/") 
  .get(getDevices)
  .post(addDevice) //use only for postman


router
  .route("/:id")
  .get(getDevice)
  .put(updateDevice)   // //use only for postman
  .delete(deleteDevice)

  
module.exports = router;

