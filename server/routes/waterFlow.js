const express = require("express");

const router = express.Router();

const {
  getWaterFlowSensors,
  getDataByDate
} = require("../controllers/waterFlowController");


router
  .route("/")
  .get(getWaterFlowSensors)    //use only for postman


router
  .route("/measurements")
  .get(getDataByDate)

module.exports = router;

