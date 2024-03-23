// jwtUtils.js

import jwt from 'jsonwebtoken';

const generateToken = (userId, email) => {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

export { generateToken, verifyToken };
