'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addColumn('Invoices', 'productIds', {
      type: Sequelize.ARRAY(Sequelize.INTEGER),
      allowNull: false,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Invoices', 'productIds');
  }
};
