const express = require('express');
const router = express.Router();
const pg = require('pg');

/* GET home page. */
router.get('/', function(req, res) {
  res.render ('index', { title: "HELLO!" });
});

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/users/detail', function(req, res, next) {
  res.send('detail');
});


module.exports = router;