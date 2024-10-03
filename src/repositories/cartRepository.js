import Cart from '../models/Cart.js';

class CartRepository {
    async createCart(cartData) {
        const cart = new Cart(cartData);
        return await cart.save();
    }

    async getCartById(cartId) {
        return await Cart.findById(cartId).populate('products.productId');
    }

    async addProductToCart(cartId, productData) {
        const cart = await Cart.findById(cartId);
        cart.products.push(productData);
        return await cart.save();
    }

    async deleteCart(cartId) {
        return await Cart.findByIdAndDelete(cartId);
    }
}

export default new CartRepository();
