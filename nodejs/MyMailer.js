class MyMail
{
    constructor()
    {
        this.sender = 'ankit3385@gmail.com';
        this.host = 'gmail.com';
        this.password = '123123';
    }
    send(receiver,subject,message)
    {
        console.log('I will send you email ' + subject  + ' ' + message);
    }
}
module.exports.MyMail = MyMail;