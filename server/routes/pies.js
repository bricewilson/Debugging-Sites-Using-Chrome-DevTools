const express = require('express');
const fs = require('fs');
const datafile = 'server/data/pies.json';
const router = express.Router();

/* GET all clothing */
router.route('/')
  .get(function(req, res) {

    let rawData = fs.readFileSync(datafile, 'utf8');
    let pieData = JSON.parse(rawData);

    res.send(pieData);

  });

module.exports = router;
