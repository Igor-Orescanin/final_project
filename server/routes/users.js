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
  loginUser,
  forgotPassword,
  resetPassword
} = require("../controllers/usersController");


const {
  assignDevice
} = require("../controllers/assignDeviceController");

router
  .route("/")
  .get(auth, getUsers)   //use only for postman
  .post(auth, validateUser(), addUser);

router
  .route("/login")
  .post(loginUser)


router
  .put("/forgot-password", forgotPassword)
  .put("/reset-password", resetPassword)

router
  .route("/:id")
  .get(auth, getUser)   //use only for postman
  .delete(auth, deleteUser)  //use only for postman
  .put(auth, updateUser)


// ROUTE FOR ASSIGN DEVICE TO A USER
router
  .route("/:userId/assignDevice/:serialNumber")
  .post(auth, assignDevice)

module.exports = router;
