const express = require('express');

// This sets up the router middleware
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {

});

router.post('/api/burgers', (req, res) => {

});

router.put('/api/burgers/:id', (req, res) => {

});

router.delete('/api/burgers/:id', (req, res) => {

});

module.exports = router;