var express = require('express');
var router = express.Router();
var mail = require('./modules/Mail.js');

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
    var result = req;
    console.log(req);
    var dataRes = {'title': 'confirmacao'};
    res.type('application/json');
    res.status(200)
    res.send(dataRes);
});

module.exports = router;