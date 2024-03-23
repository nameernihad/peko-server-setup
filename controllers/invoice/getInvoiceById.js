import InvoiceRepository from "../../repository/InvoiceRepository.js";


const getInvoiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const invoice = await InvoiceRepository.getInvoiceById(id);

    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }

    res.status(200).json({ invoice });
  } catch (error) {
    console.error('Error fetching invoice by ID:', error);
    res.status(500).json({ message: 'An error occurred while fetching invoice' });
  }
};

export default getInvoiceById;
