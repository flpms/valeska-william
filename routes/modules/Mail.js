var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var Mail = function(){
	var result;

    generator = xoauth2.createXOAuth2Generator({
        user : "filipemelodasilva@gmail.com",
        clientSecret : "Oh1hiIjclgZg2Ew8utttckIU",
        clientId: "272997199071-sueg5qpj4i1v0mlep1br6usio5qs335j.apps.googleusercontent.com",
        refreshToken : "1/itBk6FJoX_YTH-QRP8pocR6nEchGS3pAqz7wEphe86s",
        accessToken : "ya29.ZwFCtzF3Ng92868NbE51QAa8mheek_SE9fXS0qlxfiHgatGTuxSajSwYETng0IsFL58yeQyg8dF0LQ"
    });

    generator.on('token', function(token){
        console.log('New token for %s: %s', token.user, token.accessToken);
    });

    // create reusable transporter object using SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            xoauth2: generator
        }
    });

    // NB! No need to recreate the transporter object. You can use
    // the same transporter object for all e-mails

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'filipemelodasilva@gmail.com', // sender address
        to: 'flpms@icloud.com', // list of receivers
        subject: '', // Subject line
        html: '' // html body
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
    });
}

module.exports = Mail;