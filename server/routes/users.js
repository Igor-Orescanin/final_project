const express = require("express");

const { validateUser } = require('../middleware/validator');

const router = express.Router();

const auth = require('../middleware/auth');

const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  loginUser
} = require("../controllers/usersController");


const {
  assignDevice
} = require("../controllers/assignDeviceController");

router
  .route("/")
  .get(getUsers)   //use only for postman
  .post(validateUser(), addUser );

router
  .route("/login")
  .post(loginUser)
  
router
  .route("/:id")
  .get(getUser)   //use only for postman
  .delete(auth, deleteUser)  //use only for postman
  .put(auth, updateUser);


// ROUTE FOR ASSIGN DEVICE TO A USER
router
  .route("/:userId/assignDevice/:deviceId")
  .post(assignDevice)

module.exports = router;
