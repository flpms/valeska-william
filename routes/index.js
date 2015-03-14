var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lista', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/cerimonia', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/mensagem', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/confirmacao', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
