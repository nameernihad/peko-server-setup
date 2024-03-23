import CustomerRepository from "../../repository/CustomerRepository.js";


export const getAllCustomers = async (req, res) => {
  try {
    const customers = await CustomerRepository.getAllCustomers();

    res.status(200).json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
