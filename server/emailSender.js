const nodemailer = require('nodemailer');

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
function sendEmail(email, message, callback) {
  const mailOption = {
    from: process.env.EMAIL,
    to: email,
    subject: "Verify your Email",
    text: message
  };
  transporter.sendMail(mailOption, (error, info) => {
    if (error) {
      console.log(error);
      callback(false);
    } else {
      console.log(info);
      callback(true)
    }
  })
}
module.exports = {
  sendEmail
}


// const mailOption = {
//   from: process.env.EMAIL,
//   to: "maritzaochoar@gmail.com",
//   subject: "testing",
//   text: "water level low"
// };

// transporter.sendMail(mailOption, (error, info) => {
//   if (error) {
//     console.log(error);
//     callback(false);
//   } else {
//     console.log(info);
//     callback(true)
//   }
// });

