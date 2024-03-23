// controllers/product/updateProduct.js

import ProductRepository from "../../repository/ProductRepository.js";


export const updateProduct = async (req, res) => {
  const { productId } = req.params;
  const productData = req.body;
  try {
    const updatedProduct = await ProductRepository.updateProduct(productId, productData);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
