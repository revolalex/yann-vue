const nodemailer = require('nodemailer');
const getMailTemplate = require('../modules/templateMail')
const mailRouter = async function (app, connection) {

    await app.post("/mail/", function (req, res) {
        const subject = req.body.subject
        const message = req.body.message
        const name = req.body.name
        const email = req.body.email

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
            from: email,
            name: name,
            to: 'revolalex@gmail.com',
            subject: subject,
            html: getMailTemplate.emailTemplate(name, email, subject, message)
        };
        // send email
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send('error sending email')
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('email sent')
            }
        });
    })
}
module.exports = mailRouter;