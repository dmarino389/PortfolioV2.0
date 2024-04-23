// src/app/api/contact.js
const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Create a transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Destructure the body
    const { name, email, message } = req.body;

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: process.env.EMAIL_USERNAME, // List of receivers
      subject: "New Message From Contact Form", // Subject line
      text: message, // Plain text body
      html: `<p>You have a new contact form submission from:</p>
             <p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`, // HTML body content
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ success: false, error: error.message });
      }
      res
        .status(200)
        .json({ success: true, message: "Email sent", info: info.response });
    });
  } else {
    // Handle any other HTTP method
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
