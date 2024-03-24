import { Customer, Invoice, Product } from "../sequelize.js";

const InvoiceRepository = {
  async createInvoice(data) {
    try {
      const newInvoice = await Invoice.create(data);
      return newInvoice;
    } catch (error) {
      throw error;
    }
  },
  async getAllInvoices() {
    try {
      const invoices = await Invoice.findAll();
      return invoices;
    } catch (error) {
      throw error;
    }
  },
  async getInvoiceById(id) {
    try {
      // Fetch the invoice with associated customer
      const invoice = await Invoice.findByPk(id, {
        include: [
          {
            model: Customer,
            attributes: ["id", "name", "email", "phone", "city"],
          },
        ],
      });
  
      if (!invoice) {
        throw new Error("Invoice not found");
      }
  
      // Fetch product details using product IDs in invoice.productIds
      const products = await Product.findAll({
        where: { id: invoice.productIds },
        attributes: [
          "id",
          "name",
          "description",
          "price",
          "category",
          "imageUrl",
          "quantity",
        ],
      });
  
      // Merge product details into the invoice object
      invoice.dataValues.Products = products;
  
      return invoice;
    } catch (error) {
      throw error;
    }
  },
  
  
  async getInvoiceWithDetails(id) {
    console.log(id)
    try {
      const invoice = await Invoice.findByPk(id, {
        include: [
          {
            model: Customer,
            attributes: ["id", "name", "email", "phone", "city"],
          },
          {
            model: Product,
            attributes: [
              "id",
              "name",
              "description",
              "price",
              "category",
              "imageUrl",
              "quantity",
            ],
          },
        ],
      });
      return invoice;
    } catch (error) {
      throw error;
    }
  },
};

export default InvoiceRepository;
