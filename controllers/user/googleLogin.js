
import UserRepository from '../../repository/UserRepository.js';
import { generateToken } from '../../services/jwt.js';

export const googleLogin = async (req, res) => {
  try {
    const { email} = req.body;

    const user = await UserRepository.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid Email' });
    }

    if(user.loginType!=='google'){
        return res.status(400).json({message:'Try LogIn manually'})
    }
    const token = generateToken(user._id, user.email);

    res.status(200).json({ message: 'Login successful', token: token });
    
  } catch (message) {
    console.message('message logging in:', message);
    res.status(500).json({ message: 'Internal server message' });
  }
};
