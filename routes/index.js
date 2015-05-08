var express = require('express');
var router = express.Router();
var mail = require('./modules/Mail.js');
var querystring = require('querystring');

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
    var emailContent = mail.fillContent(req.query.names, req.query.email, req.query.message);

    var afterSendEmail = function(error, info) {
        var result;
        var dataRes = {
        	status:''
        };

        if(error){
            dataRes.status = fail;
            dataRes.details = error;
            console.log('error', error);
        }else{
            console.log('Message sent: ' + info.response);
            result = info.response;
            dataRes.status = 'OK';
		    res.set({'Content-Type': 'application/json'});
		    res.status(200).json(dataRes);
        }
    }

    var resultSend = mail.sendEmail(emailContent, afterSendEmail);
    
});

module.exports = router;