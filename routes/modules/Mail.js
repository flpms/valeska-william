var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var Mail = function() {
    var self = this;
    self.fillContent = function(name, emailAddress, message) {
        var hasMessage = '';

        if (message) {
            hasMessage = ' e lhe enviou a mensagem a baixo';
            message = '<p style="font-style:italic;">“'+ message +'”</p>';
        } else {
            message = '';
        }

        return {
            from: emailAddress, // sender address
            to: 'william.ornaghi@icloud.com', // list of receivers
            subject: '[✓] Confirmando a presença de ' + name, // Subject line
            html: '<h1>' + name + '</h1><h3>Estará no seu casamento'+ hasMessage +'</h3>'+ message +'<br /><br /><br />'+ emailAddress // html body
        };
    }

    self.sendEmail = function(content, callback) {
        var generator = xoauth2.createXOAuth2Generator({
            
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
