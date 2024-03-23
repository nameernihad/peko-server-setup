import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import UserModel from './models/userModel.js';
import CustomerModel from './models/customerModel.js';
import productsModel from './models/productModel.js';
import InvoiceModel from './models/invoiceModel.js';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const User = UserModel(sequelize);
const Customer = CustomerModel(sequelize)
const Product = productsModel(sequelize)
const Invoice = InvoiceModel(sequelize)

Invoice.associate({ Customer, Product });



const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    await sequelize.sync();
    console.log('Models synced with the database.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export { sequelize, connectToDatabase as connection, User ,Customer,Product,Invoice};
