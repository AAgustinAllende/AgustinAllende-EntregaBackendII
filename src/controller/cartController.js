import Cart from '../models/Cart.js';


export const addProductToCart = async (req, res) => {
    const { productId } = req.body;
    const cart = await Cart.findOneAndUpdate(
        { purchaser: req.user.id },
        { $addToSet: { products: { productId, quantity: 1 } } },
        { new: true, upsert: true }
    );
    res.json(cart);
};

export const removeProductFromCart = async (req, res) => {
    const { productId } = req.body;
    const cart = await Cart.findOneAndUpdate(
        { purchaser: req.user.id },
        { $pull: { products: { productId } } },
        { new: true }
    );
    res.json(cart);
};

export const getCartById = async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
    }
    res.json(cart);
};

export const createCart = async (req, res) => {
    const newCart = new Cart({ purchaser: req.user.id, products: [] }); 
    await newCart.save();
    res.status(201).json(newCart);
};

export const deleteCart = async (req, res) => {
    const { id } = req.params;
    await Cart.findByIdAndDelete(id);
    res.status(204).send();
};
