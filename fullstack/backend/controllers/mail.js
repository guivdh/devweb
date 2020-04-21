const nodeMailer = require('nodemailer');

exports.sendMail = (req, res) => {
    var postData  = req.body;
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'contact.pingpong.ephec@gmail.com',
            pass: ''
        }
    });
    let mailOptions = {
        from: '"Contact" <contact.pingpong.ephec@gmail.com>', // sender address
        to: postData['to'], // list of receivers
        subject: postData['subject'], // Subject line
        text: postData['content'], // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('Email sent');
    });
};