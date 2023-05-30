var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akremwahabi3@gmail.com",
    pass: "*123",
  },
});
var mailOptions = {
  from: "akremwahabi3@gmail.com",
  to: "akremwahabi03@gmail.com@gmail.com",
  subject: "Mail subject",
  text: "Hi ... ! ",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
