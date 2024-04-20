const { createTransport } = require("nodemailer");

const transporter = createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shashankphatkurepro@gmail.com",
    pass: "msdw hxkc zyns heej",
  },
});

const mailOptions = {
  from: "shashankphatkurepro.com",
  to: "shashankphatkure.com",
  subject: "New Job Opportunities",
  text: "You have received some new job. Please click to view more!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email: ", error);
  } else {
    console.log("Email sent: ", info.response);
  }
});
