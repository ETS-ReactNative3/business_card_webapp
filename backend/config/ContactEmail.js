
const nodemailer = require("nodemailer");
const email = "empty.stacks.itc@gmail.com"
const password = process.env.ADMIN_PASSWORD

const contactEmail = nodemailer.createTransport({
    //sendmail: true,
    service: 'gmail',
    auth: {
        user:  email,
        pass: password
    },
});

contactEmail.verify((error) => {
    if (error){
        console.log(error)
    }else{
        console.log("rdy")
    }
})


module.exports = {contactEmail}