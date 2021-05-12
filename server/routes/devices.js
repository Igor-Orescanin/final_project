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
<<<<<<< HEAD
  .route("/")
=======
  .route('/') 
>>>>>>> main
  .get(getDevices)
  .post(addDevice) //use only for postman


router
  .route("/:id")
  .get(getDevice)
  .put(updateDevice)   // update the thresold level
  .delete(deleteDevice)


module.exports = router;

