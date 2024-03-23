// controllers/product/getAllProducts.js

import ProductRepository from "../../repository/ProductRepository.js";


export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductRepository.findAllProducts();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
