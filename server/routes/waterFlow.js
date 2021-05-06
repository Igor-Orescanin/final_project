const express = require("express");

const router = express.Router();

const {
  getWaterFlow
} = require("../controllers/")


router
  .route("./devices/:deviceId");
  .get(getWaterFlow)

router
  .route("./:deviceId/assignWaterFlow/:waterFlowId")
  .post(assignWaterFlow)

module.exports = router;

