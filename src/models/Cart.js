import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    products: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true }
        }
    ],
    purchaser: { type: String, required: true },
}, { timestamps: true });

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
