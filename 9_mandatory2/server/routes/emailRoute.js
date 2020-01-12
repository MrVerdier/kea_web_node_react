const nodemailer = require('nodemailer');
const router = require("express").Router()
const Emails = require('../models/Emails')
const credentials = require('../config/email_credentials')

router.post('/email', async (req, res) => {

    async function main() {

    var transporter = nodemailer.createTransport({
        service: credentials.service,
        auth: {
               user: credentials.user,
               pass: credentials.password
           }
       });

    const mailOptions = {
        from:req.body.from,
        to:req.body.toEmail, 
        subject:req.body.subject, 
        text:req.body.emailText
      };
      
    console.log(mailOptions)

    transporter.sendMail(mailOptions, async function (err, info) {
        if(err) {
          console.log(err)
        }
        else {
          console.log(info)
          const newEmail = {
            from:req.body.from,
            to:req.body.toEmail, 
            subject:req.body.subject, 
            text:req.body.emailText,
            user_fk: 1
          };
          const email = await Emails.query().insert(newEmail)
          res.status(200).send({response: "Email sent"})
          console.log(email)
        }
     });
    }
     main().catch(console.error)
})

router.get('/getemails', async (req, res) => {
  const emails = await Emails.query().select().where("user_fk", 1).eager('emails')
  res.json(emails)
})

module.exports = router