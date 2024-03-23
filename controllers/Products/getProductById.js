// controllers/product/getProductById.js

import ProductRepository from "../../repository/ProductRepository.js";


export const getProductById = async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await ProductRepository.findProductById(productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching product by id:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
