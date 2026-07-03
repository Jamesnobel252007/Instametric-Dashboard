const express = require("express");
const { reportSummary, reports } = require("../data/mockData");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    reportSummary,
    reports,
  });
});

module.exports = router;