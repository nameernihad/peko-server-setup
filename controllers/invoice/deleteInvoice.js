// deleteInvoice.js

import { Invoice } from "../../sequelize.js";


const deleteInvoice = async (req, res) => {
  const { id } = req.params; 

  try {
    const deletedInvoice = await Invoice.destroy({ where: { invoiceId:id } });

    if (deletedInvoice === 0) {
      return res.status(404).json({ message: 'Invoice not found or already deleted.' });
    }

    return res.status(200).json({ message: 'Invoice deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting the invoice.', error: error.message });
  }
};

export default deleteInvoice;
