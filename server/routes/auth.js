const express = require("express");

const router = express.Router();

const { loginUser } = require('../controllers/usersController')


// ROUTE FOR LOGIN
router
  .route("/")
  .post(loginUser)

module.exports = router;
