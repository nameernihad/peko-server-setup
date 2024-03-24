// emailVerification.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config()

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, 
  tls: { rejectUnauthorized: false }, 
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.APP_PASSWORD,
  },
});


const sendVerificationEmail = async (email, verificationToken) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
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
