const express = require("express");

// This sets up the router middleware
const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
  burger.all((data) => {
    var hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
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
