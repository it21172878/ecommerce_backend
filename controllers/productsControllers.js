const Product = require('../models/Product');

module.exports = {
  // create a product
  createProduct: async (req, res) => {
    const newProduct = new Product(req.body);
    try {
      await newProduct.save();
      res.status(200).json('product created');
    } catch (error) {
      res.status(500).json('failed to create poduct');
    }
  },

  //   get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ createdAt: -1 });
      res.status(200).json(products);
    } catch {
      res.status(500).json('failed to get products');
    }
  },

  //   get specific product
  getProduct: async (req, res) => {
    const productId = req.params.id;
    try {
      const product = await Product.findById(productId);
      const { __v, createdAt, ...productData } = product._doc;
      res.status(200).json(productData);
    } catch {
      res.status(500).json('failed to get product');
    }
  },

  //   search product
  searchProduct: async (req, res) => {
    try {
      const results = await Product.aggregate([
        {
          $search: {
            index: 'shoes',
            text: {
              query: req.params.id,
              path: {
                wildcard: '*',
              },
            },
          },
        },
      ]);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json('failed to get product');
    }
  },
};
