// customerController.js

import CustomerRepository from "../../repository/CustomerRepository.js";

export const updateCustomer = async (req, res) => {
  try {
    const customerId = req.params.customerId;
    const { name, email, phone, city } = req.body;

    const existingCustomer = await CustomerRepository.findById(customerId);
    if (!existingCustomer) {
      return res.status(400).json({ error: 'Customer not found' });
    }

    existingCustomer.name = name || existingCustomer.name;
    existingCustomer.email = email || existingCustomer.email;
    existingCustomer.phone = phone || existingCustomer.phone;
    existingCustomer.city = city || existingCustomer.city;

    const updatedCustomer = await existingCustomer.save();

    res.status(200).json({ message: 'Customer updated successfully', customer: updatedCustomer });
  } catch (error) {
    console.error('Error updating customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
