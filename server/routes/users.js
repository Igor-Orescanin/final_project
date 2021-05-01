const express = require("express");

const { validateUser } = require('../middleware/validator');

const router = express.Router();

const auth = require('../middleware/auth');

const {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
} = require("../controllers/usersController");

router
  .route("/")
  .get(getUsers)   //use in postman
  .post(validateUser(), addUser);

router
  .route("/:id")
  .get(getUser)   //use in postman
  .delete(auth, deleteUser)  //use in postman
  .put(updateUser);


module.exports = router;
