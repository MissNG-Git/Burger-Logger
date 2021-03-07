const express = require("express");

// This sets up the router middleware
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  // selectAll()
});

router.post("/api/burgers", (req, res) => {
  // insertOne()
});

router.put("/api/burgers/:id", (req, res) => {
  // updateOne()
});

router.delete("/api/burgers/:id", (req, res) => {
  // deleteAll()
});

module.exports = router;
