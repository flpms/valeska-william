var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

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
    var result;

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'filipemelodasilva@gmail.com',
            pass: '#keila00'
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'filipemelodasilva@gmail.com', // sender address
        to: 'flpms@icloud.com', // list of receivers
        subject: 'Hello Teste NodeMailer✔', // Subject line
        text: 'Se funcionar, funcionou ✔', // plaintext body
        html: '<b>Hello world ✔</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            result = error;
            console.log(error);
        }else{
            console.log('Message sent: ' + info.response);
            result = info.response;
        }

        res.render('index', { title: 'confirmacao', info: result});
    });
});

module.exports = router;
