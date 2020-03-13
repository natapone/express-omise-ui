var express = require('express');
var router = express.Router();

var db_client = require('../lib/db_client');

// Home page route
router.get('/', function(req, res) {
  res.send('Payment home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this Payment');
});

router.get('/db', function(req, res) {
  db_client.fetch_test();
  res.send('Test db');
});

module.exports = router;
