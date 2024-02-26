import Product from '../models/user.model.js'
import extend from 'lodash/extend.js'
import errorHandler from './error.controller.js'
import express from 'express';
const router = express.Router();

const createProduct = async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  const getAllProductsOrSearch = async (req, res) => {
    try {
      const { name } = req.query;
      if (name) {
        const regex = new RegExp(name, 'i'); // Case-insensitive search
        const products = await Product.find({ name: regex });
        return res.status(200).json(products);
      } else {
        const products = await Product.find();
        return res.status(200).json(products);
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
// Controller function to get a single product by ID
const getProductByID = async (req, res) => {
    try {
      const productId = req.params.productId;
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Controller function to update a product by ID
  const updateProductByID = async (req, res) => {
    try {
      const productId = req.params.productId;
      const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true });
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };
  
  // Controller function to delete a product by ID
  const deleteProductByID = async (req, res) => {
    try {
      const productId = req.params.productId;
      const deletedProduct = await Product.findByIdAndDelete(productId);
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  const deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany(); // Delete all products from the database
      res.status(200).json({ message: 'All products deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  const searchProductsByName = async (req, res) => {
    try {
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({ error: 'Name parameter is required' });
      }
      const regex = new RegExp(name, 'i'); // Case-insensitive search
      const products = await Product.find({ name: regex });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  export default {
    createProduct,
    getAllProductsOrSearch,
    getProductByID,
    updateProductByID,
    deleteProductByID,
    deleteAllProducts,
    searchProductsByName
  };
  