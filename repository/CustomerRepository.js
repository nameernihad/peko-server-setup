// customerRepository.js
import { Op } from 'sequelize';
import { Customer } from '../sequelize.js';

class CustomerRepository {
  async findByNameOrPhone(name, phone) {
    return Customer.findOne({
      where: {
        [Op.or]: [{ name }, { phone }],
      },
    });
  }

  async findByEmail(email) {
    return Customer.findOne({ where: { email } });
  }

  async findById(id) {
    return Customer.findByPk(id);
  }

  async createCustomer(customerData) {
    return Customer.create(customerData);
  }

  async getAllCustomers() {
    return Customer.findAll();
  }
}

export default new CustomerRepository();
