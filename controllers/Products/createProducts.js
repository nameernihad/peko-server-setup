// controllers/product/createProduct.js

import ProductRepository from "../../repository/ProductRepository.js";


export const createProduct = async (req, res) => {
  const productData = req.body;
  console.log(productData)
  try {
    const createdProduct = await ProductRepository.createProduct(productData);
    console.log(createProduct)
    res.status(201).json(createdProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
