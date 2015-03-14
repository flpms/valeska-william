var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Valeska & William' });
});

router.get('/lista', function(req, res, next) {
  res.render('lista', { title: 'Valeska & William - Lista' });
});

router.get('/cerimonia', function(req, res, next) {
  res.render('cerimonia',  { title: 'Valeska & William - Cerimônia' });
});

router.get('/mensagem', function(req, res, next) {
  res.render('index', { title: 'mensagem' });
});

router.get('/confirmacao', function(req, res, next) {
  res.render('index', { title: 'confirmacao' });
});

module.exports = router;
