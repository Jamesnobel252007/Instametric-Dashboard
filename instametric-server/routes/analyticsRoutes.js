const express = require("express");
const {
  reachImpressionData,
  engagementRateData,
  contentTypeData,
  audienceData,
} = require("../data/mockData");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    reachImpressionData,
    engagementRateData,
    contentTypeData,
    audienceData,
  });
});

module.exports = router;