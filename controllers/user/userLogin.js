import bcrypt from 'bcrypt';
import UserRepository from '../../repository/UserRepository.js';
import { generateToken } from '../../services/jwt.js';

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserRepository.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email' });
    }
    if(user.loginType==='google'){
      return res.status(400).json({message:'Try Google authentication'})
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid Password' });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: 'Verify your email to Login' });
    }

    const token = generateToken(user._id, user.email);

    res.status(200).json({ message: 'Login successful', token: token });
  } catch (message) {
    console.message('message logging in:', message);
    res.status(500).json({ message: 'Internal server message' });
  }
};
