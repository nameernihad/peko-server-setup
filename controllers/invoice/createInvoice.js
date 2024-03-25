import InvoiceRepository from "../../repository/InvoiceRepository.js";

const createInvoiceController = async (req, res) => {
  try {
    const { totalAmount, discountPrice, discountPercentage, status, customerId, productIds } = req.body;

    const invoiceData = {
      totalAmount,
      discountPrice,
      discountPercentage,
      status,
      customerId,
      productIds, 
    };

    const newInvoice = await InvoiceRepository.createInvoice(invoiceData);
    const invoiceWithDetails = await InvoiceRepository.getInvoiceById(newInvoice.invoiceId); 

    res.status(201).json({ message: 'Invoice created successfully', invoice: invoiceWithDetails });
  } catch (error) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ message: 'An error occurred while creating the invoice' });
  }
};

export default createInvoiceController;
