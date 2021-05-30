const express = require("express");

const router = express.Router();

const auth = require('../middleware/auth');

const {
    getWeekWaterFlow,
    getMonthWaterFlow,
    getYearWaterFlow,
    getMinWaterFlow
} = require("../controllers/waterFlowController");


router
  .route("/week")
  .get(auth, getWeekWaterFlow)


router
  .route("/month")
  .get(auth, getMonthWaterFlow)


router
  .route("/year")
  .get(auth, getYearWaterFlow)


router
  .route("/minutes")        //to check my database
  .get(auth, getMinWaterFlow)

module.exports = router;

