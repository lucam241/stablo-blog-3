const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'andrei1.radu93@gmail.com',
    pass: process.env.MAIL_SECURE_PASSWORD,
  },
});

export default function helloAPI(req, res) {
  
  
  transporter.sendMail({
    from: 'andrei1.radu93@gmail.com', // sender address
    to: "lucam0546@gmail.com", // list of receivers
    subject: "Notificare Cars, Cruising, Culture", // Subject line
    html: `name: ${req.body.name}<br/>email: ${req.body.email}<br/>message: ${req.body.message}<br/>`, // html body
  }).then(info => {
    res.status(200).json(info)
  }).catch(err => {res.status(500).json(err), console.log(err)})

}
