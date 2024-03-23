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

  //   async getInvoiceById(id) {
  //     try {
  //       const invoice = await Invoice.findByPk(id);
  //       return invoice;
  //     } catch (error) {
  //       throw error;
  //     }
  //   },
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
      const invoice = await Invoice.findByPk(id, {
        include: [
          {
            model: Customer,
            attributes: ["id", "name", "email", "phone", "city"],
          },
          {
            model: Product, // Include the Product model for association
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
