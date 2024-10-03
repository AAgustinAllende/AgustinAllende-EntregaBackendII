// src/daos/cartDAO.js
import { Cart } from '../models/Cart.js';

class CartDAO {
    async getCartByUserId(userId) {
        return await Cart.findOne({ user: userId });
    }

    async addProductToCart(userId, productId) {
        return await Cart.findOneAndUpdate(
            { user: userId },
            { $addToSet: { products: productId } },
            { new: true, upsert: true }
        );
    }

    async removeProductFromCart(userId, productId) {
        return await Cart.findOneAndUpdate(
            { user: userId },
            { $pull: { products: productId } },
            { new: true }
        );
    }
}

export const cartDAO = new CartDAO();
