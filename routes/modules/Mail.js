var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var Mail = function() {
    var self = this;
    self.fillContent = function(name, from, message) {
        var hasMessage = '';

        if (message) {
            hasMessage = ' e lhe enviou a mensagem a baixo';
            message = '<p style="font-style:italic;">“'+ message +'”</p>';
        } else {
            message = '';
        }

        return {
            from: from, // sender address
            to: 'flpms@icloud.com', // list of receivers
            subject: '[✓] Confirmando a presença de ' + name, // Subject line
            html: '<h1>' +name + '</h1><h3>Estará no seu casamento'+hasMessage+'</h3>'+message+'<br /><br /><br />'+email // html body
        };
    }

    self.sendEmail = function(content, callback) {
        var generator = xoauth2.createXOAuth2Generator({
            user : "filipemelodasilva@gmail.com",
            clientSecret : "Oh1hiIjclgZg2Ew8utttckIU",
            clientId: "272997199071-sueg5qpj4i1v0mlep1br6usio5qs335j.apps.googleusercontent.com",
            refreshToken : "1/itBk6FJoX_YTH-QRP8pocR6nEchGS3pAqz7wEphe86s",
            accessToken : "ya29.ZwFCtzF3Ng92868NbE51QAa8mheek_SE9fXS0qlxfiHgatGTuxSajSwYETng0IsFL58yeQyg8dF0LQ"
        });

        generator.on('token', function(token){
            console.log('New token for %s: %s', token.user, token.accessToken);
        });

        var transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                xoauth2: generator
            }
        });

        transporter.sendMail(content, callback);
    }
    // send mail with defined transport object
}

module.exports = new Mail;