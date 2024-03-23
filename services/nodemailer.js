// emailVerification.js

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  tls: { rejectUnauthorized: false }, 
  auth: {
      user: "nameernihadpc@gmail.com",
      pass: "vvjy dmsx jubs udls",
  },
});


const sendVerificationEmail = async (email, verificationToken) => {
  try {
    await transporter.sendMail({
      from: "nameernihadpc@gmail.com",
      to: email,
      subject: 'Email Verification',
      html: `<p>Click <a href="http://localhost:3000/verify/${verificationToken}">here</a> to verify your email.</p>`,
    });

    console.log('Verification email sent successfully');
  } catch (error) {
    console.error('Error sending verification email:', error);
    throw new Error(error.message)
  }
};

export default sendVerificationEmail;
