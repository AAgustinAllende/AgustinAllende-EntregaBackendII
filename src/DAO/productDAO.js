// src/daos/productDAO.js
import { Product } from '../models/Product.js';

class ProductDAO {
    async getAllProducts() {
        return await Product.find();
    }

    async createProduct(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    async updateProduct(id, productData) {
        return await Product.findByIdAndUpdate(id, productData, { new: true });
    }

    async deleteProduct(id) {
        return await Product.findByIdAndDelete(id);
    }
}

export const productDAO = new ProductDAO();
