// deleteCustomer controller

import CustomerRepository from "../../repository/CustomerRepository.js";

export const deleteCustomer = async (req, res) => {
  const { customerId } = req.params;

  try {
    const existingCustomer = await CustomerRepository.findById(customerId);
    if (!existingCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    await existingCustomer.destroy();

    res.status(200).json({ message: 'Customer deleted successfully' });
  } catch (error) {
    console.error('Error deleting customer:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
