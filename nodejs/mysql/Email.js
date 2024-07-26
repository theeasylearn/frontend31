var nodemailer = require('nodemailer');
class mail 
{
    constructor()
    {
      this.sender = 'tempm7777@gmail.com';
      this.password = 'cyey hbwe hvzp xzsc';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: this.sender,
              pass: this.password,
            },
          });
        MailSender.verify().then(console.log).catch(console.error);
    }
    send(receiver,subject,message)
    {
        this.MailSender.sendMail({
            from: "Your Name" + `<${this.sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
          });
    }
}
module.exports.mail = mail;