var nodemailer = require('nodemailer');

var MailSender = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'tempm7777@gmail.com',
      pass: '',
    },
  });
MailSender.verify().then(console.log).catch(console.error);
MailSender.sendMail({
  from: '"Your Name" <tempm7777@gmail.com>', // sender address
    to: "rc6332365@gmail.com", // list of receivers
    subject: "Invitation for food party", // Subject line
    html: "<b>testing testing testing </b>", // html body
  }).then(info => {console.log({info});}).catch(console.error);