
const Product = require('../models/ProductModel.js') 
const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json({ products })
}

module.exports = {
  getProducts
}