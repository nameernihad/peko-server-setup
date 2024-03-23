import InvoiceRepository from "../../repository/InvoiceRepository.js";

const getAllInvoices = async (req, res) => {
  try {
    const invoices = await InvoiceRepository.getAllInvoices();

    res.status(200).json({ invoices });
  } catch (error) {
    console.error('Error fetching invoices:', error);
    res.status(500).json({ message: 'An error occurred while fetching invoices' });
  }
};

export default getAllInvoices;
