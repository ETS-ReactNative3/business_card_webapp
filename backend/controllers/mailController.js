const { restart } = require('nodemon')
const {contactEmail} = require('../config/ContactEmail')

// @desc Post email (send email)
// @route Post to /contact route
// @access Public
const sendEmail = async (req, res) => {
    //const hostEmail = "empty.stacks.itc@gmail.com";
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message; 
    const mail = {
      from: email,
      to: "empty.stacks.itc@gmail.com",
      subject: subject,
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    console.log(req.body)
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error)
        res.json({ status: "ERROR"});
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  };

  module.exports = {
      sendEmail
  }