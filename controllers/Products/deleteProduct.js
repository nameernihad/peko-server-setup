// controllers/product/deleteProduct.js

import ProductRepository from "../../repository/ProductRepository.js";


export const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  try {
    await ProductRepository.deleteProduct(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
