const express = require("express");

const router = express.Router();

const {
    getWeekWaterFlow,
    getMonthWaterFlow,
    getYearWaterFlow,
    getMinWaterFlow
} = require("../controllers/waterFlowController");


router
  .route("/week")
  .get(getWeekWaterFlow)   


router
  .route("/month")
  .get(getMonthWaterFlow)


router
  .route("/year")
  .get(getYearWaterFlow)


router
  .route("/minutes")        //to check my database 
  .get(getMinWaterFlow)

module.exports = router;

