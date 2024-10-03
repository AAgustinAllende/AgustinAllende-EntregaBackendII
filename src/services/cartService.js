import { cartRepository } from '../repositories/cartRepository.js';

export const createCart = async () => {
    const cart = await cartRepository.createCart();
    return cart;
};

export const getCartById = async (id) => {
    const cart = await cartRepository.getCartById(id);
    return cart;
};

export const addProductToCart = async (cartId, productId) => {
    const updatedCart = await cartRepository.addProductToCart(cartId, productId);
    return updatedCart;
};

export const deleteCart = async (id) => {
    const result = await cartRepository.deleteCart(id);
    return result;
};
