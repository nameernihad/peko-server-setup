// customerController.js
import CustomerRepository from '../../repository/CustomerRepository.js';

export const createCustomer = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;

    const existingCustomer = await CustomerRepository.findByNameOrPhone(name, phone);
    if (existingCustomer) {
      return res.status(400).json({ error: 'Customer with the same name or phone number already exists' });
    }

    const customerData = {
      name,
      email,
      phone,
      city,
    };

    const newCustomer = await CustomerRepository.createCustomer(customerData);

    res.status(201).json({ message: 'Customer created successfully', customer: newCustomer });
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
