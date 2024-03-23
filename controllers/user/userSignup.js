// UserController.js

import bcrypt from "bcrypt";
import crypto from "crypto";
import UserRepository from "../../repository/UserRepository.js";
import sendVerificationEmail from "../../services/nodemailer.js";

export const userSignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await UserRepository.findByUsernameOrEmail(
      name,
      email
    );

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    await UserRepository.createUser(userData);

    const verificationToken = crypto.randomBytes(32).toString("hex");

    await UserRepository.saveVerificationToken(email, verificationToken);

    await sendVerificationEmail(email, verificationToken);

    res.status(201).json({ message: "Check your email to verify" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
