// repository/productRepository.js

import { Op } from 'sequelize';
import { Product } from '../sequelize.js';

class ProductRepository {
  async findAllProducts() {
    return Product.findAll();
  }

  async findProductById(id) {
    return Product.findByPk(id);
  }

  async createProduct(productData) {
    return Product.create(productData);
  }

  async updateProduct(id, productData) {
    const existingProduct = await Product.findByPk(id);
    if (!existingProduct) {
      throw new Error('Product not found');
    }
    return existingProduct.update(productData);
  }

  async deleteProduct(id) {
    const existingProduct = await Product.findByPk(id);
    if (!existingProduct) {
      throw new Error('Product not found');
    }
    return existingProduct.destroy();
  }
}

export default new ProductRepository();
