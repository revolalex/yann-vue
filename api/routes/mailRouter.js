const nodemailer = require('nodemailer');

const mailRouter = async function (app, connection) {

    await app.post("/mail/", function (req, res) {
        const subject = req.body.subject
        const textOfEmail = req.body.text
        const sender = req.body.sender

        //gmail acces
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'revolalex@gmail.com',
                pass: 'vykhkzqhqqkbobdf'
            }
        });
        // Mail object
        var mailOptions = {
            from: sender,
            to: 'revolalex@gmail.com',
            subject: subject,
            text: textOfEmail
        };
        // send email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log(process.env.GMAIL_PASS);
                console.log('Email sent: ' + info.response);
                res.send('email sent')
            }
        });



    })

}
module.exports = mailRouter;