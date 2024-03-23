import { DataTypes } from 'sequelize';

const UserModel = (sequelize) => {
  return sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
    },
    loginType: {
      type: DataTypes.ENUM('google', 'regular'),
      defaultValue: 'regular',
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    verificationToken: {
      type: DataTypes.STRING,
    },
    profilePhoto: {
      type: DataTypes.STRING,
    },
  });
};

export default UserModel;
