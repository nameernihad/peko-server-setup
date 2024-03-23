// UserController.js
import UserRepository from '../../repository/UserRepository.js';
import { generateToken } from '../../services/jwt.js';

export const googleSignUp = async (req, res) => {
  try {
    const { name, email,picture,verified_email} = req.body;
    const existingUser = await UserRepository.findByUsernameOrEmail(name, email);
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const userData = {
      name,
      email,
      profilePhoto: picture,
      isVerified: verified_email,
      loginType:'google',
    };

    const user = await UserRepository.createUser(userData);
    if(user){
      const token = generateToken(user._id,user.email)
      if(token){
        res.status(201).json({ message: 'Success fully registered', token: token });
      }
    }
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
