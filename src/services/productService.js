import { productRepository } from '../repositories/productRepository.js';

export const createProduct = async (productData) => {
    const product = await productRepository.createProduct(productData);
    return product;
};

export const getAllProducts = async () => {
    const products = await productRepository.getAllProducts();
    return products;
};

export const getProductById = async (id) => {
    const product = await productRepository.getProductById(id);
    return product;
};

export const updateProduct = async (id, productData) => {
    const updatedProduct = await productRepository.updateProduct(id, productData);
    return updatedProduct;
};

export const deleteProduct = async (id) => {
    const result = await productRepository.deleteProduct(id);
    return result;
};
