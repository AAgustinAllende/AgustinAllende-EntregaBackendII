import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

export const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
};

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).send();
};
