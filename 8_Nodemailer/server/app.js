const nodemailer = require('nodemailer');
var password = require("./password");

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email

    // create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'hoevdingerne@gmail.com',
               pass: password.myPassword
           }
       });

    // send mail with defined transport object
    const mailOptions = {
        from: '"DET BARE ANDERS" <hoevdingerne@gmail.com>', // sender address
        to: 'ande5630@gstud.kea.dk', // list of receivers
        subject: 'HVA SÅ DER', // Subject line
        html: '<p>HEJ BJØRN!</p>'// plain text body
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });

}

main().catch(console.error);