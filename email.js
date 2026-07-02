// email.js

import express from "express";
import nodemailer from "nodemailer";

const app = express();

app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bilalagentic103106@gmail.com",
    pass: "",
  },
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/email", (req, res) => {
  res.render("email");
});
app.post("/email-send", (req, res) => {
  console.log(req.body);

  const { mail, subject, text } = req.body;

  if (!mail || !subject || !text) {
    return res.send("Mail, subject or text missing");
  }

  if (!mail.includes("@")) {
    return res.send("Invalid email address");
  }

  const mailOptions = {
    from: "bilalagentic103106@gmail.com",
    to: mail,
    subject: subject,
    text: text, // 👈 NOW dynamic
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send("Error sending email");
    }

    console.log(info);
    res.send("Email sent successfully");
  });
});
app.listen(3200, () => {
  console.log("Email service is running on port 3200");
});
