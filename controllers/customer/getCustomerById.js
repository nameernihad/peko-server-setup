// getCustomerById controller

import CustomerRepository from "../../repository/CustomerRepository.js";


export const getCustomerById = async (req, res) => {
  const { customerId } = req.params;

  try {
    const customer = await CustomerRepository.findById(customerId);
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.status(200).json({ customer });
  } catch (error) {
    console.error('Error fetching customer by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
