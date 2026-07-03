const express = require("express");
const {
  overviewStats,
  followerGrowthData,
  engagementData,
  recentContent,
} = require("../data/mockData");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    overviewStats,
    followerGrowthData,
    engagementData,
    recentContent,
  });
});

module.exports = router;