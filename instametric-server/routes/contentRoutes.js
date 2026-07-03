const express = require("express");
const { contentPerformance } = require("../data/mockData");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(contentPerformance);
});

module.exports = router;