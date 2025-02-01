var nodemailer = require('nodemailer');
class Email 
{
    constructor()
    {
      this.sender = 'tempm7777@gmail.com';
      this.password = 'wahe iifl jzoi apax';
      this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: this.sender,
              pass: this.password,
            },
          });
        //this.MailSender.verify();
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
module.exports.Email = Email;