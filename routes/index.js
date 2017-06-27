var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thao Luu | Front-End Web Developer'});
});

router.get('/users', function(req, res, next) {
  // res.send('respond with a resource');
  res.render('users', { title: 'users site'});

});


module.exports = router;
