// customerModel.js
import { DataTypes } from 'sequelize';

const CustomerModel = (sequelize) => {
  return sequelize.define('Customer', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    }
  });
};

export default CustomerModel;
