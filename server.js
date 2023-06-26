const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // For TLS connection
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'srinivasbharadwaj.hullur@outlook.com',
        pass: 'Hullur9606@'
    }
})

const mailOptions = {
    from: 'srinivasbharadwaj.hullur@outlook.com',
    to: 'srinivas.bh@agilophiles.com',
    subject: 'Hello from Nodemailer',
    text: 'This is the plain text version of the email.',
    html: '<p>This is the HTML version of the email.</p>'
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });

app.listen(5000, () => {
    console.log("Listening on port 5000")
})