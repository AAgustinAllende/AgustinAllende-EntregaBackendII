import Product from '../models/Product.js';

class ProductRepository {
    async createProduct(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    async getAllProducts() {
        return await Product.find();
    }

    async getProductById(productId) {
        return await Product.findById(productId);
    }

    async updateProduct(productId, productData) {
        return await Product.findByIdAndUpdate(productId, productData, { new: true });
    }

    async deleteProduct(productId) {
        return await Product.findByIdAndDelete(productId);
    }
}

export default new ProductRepository();
