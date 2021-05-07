const express = require("express");

const router = express.Router();

const {
  addWaterFlowSensor,
  getWaterFlowSensors,
  //getWaterFlowSensor,
  assignWaterFlowSensor
} = require("../controllers/assignWaterFlowController");


router
  .route("/")
  .post(addWaterFlowSensor)   //use only for postman
  .get(getWaterFlowSensors)    //use only for postman

// router
//  .route("/:id")
  //.get(getWaterFlowSensor)S

router
  .route("/:deviceRpiId/assignWaterFlowSensor/:deviceWaterFlowId")
  .post(assignWaterFlowSensor)

module.exports = router;

