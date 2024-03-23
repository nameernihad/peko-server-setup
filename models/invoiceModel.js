// Modified invoiceModel.js with associations to Customer and Product

import { DataTypes } from 'sequelize';

const InvoiceModel = (sequelize) => {
  const Invoice = sequelize.define('Invoice', {
    invoiceId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    discountPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
    },
    discountPercentage: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('paid', 'unpaid'),
      allowNull: false,
      defaultValue: 'unpaid',
    },
    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Customer',
        key: 'id',
      },
    },
    productIds: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
  });

  Invoice.associate = (models) => {
    Invoice.belongsTo(models.Customer, { foreignKey: 'customerId' });
    Invoice.belongsToMany(models.Product, { through: 'InvoiceProducts', foreignKey: 'invoiceId' });
  };
  

  return Invoice;
};

export default InvoiceModel;
