import UserRepository from "../repository/UserRepository.js";

export const verifyEmail = async (req, res) => {
    try {
      const { token } = req.params;
  
      const isVerified = await UserRepository.verifyEmail(token);
  
      if (isVerified) {
        console.log('Email verified successfully')
        res.status(200).json({ message: 'Email verified successfully' });
      } else {
        res.status(400).json({ error: 'Invalid verification token' });
      }
    } catch (error) {
      console.error('Error verifying email:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
  