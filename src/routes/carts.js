import express from 'express';
import { createCart, addProductToCart, removeProductFromCart, deleteCart, getCartById } from '../controller/cartController.js'; // Asegúrate de que el nombre de las funciones coincida

const router = express.Router();

router.post('/', createCart); 
router.post('/add', addProductToCart); 
router.delete('/remove', removeProductFromCart); 
router.get('/:id', getCartById); 
router.delete('/:id', deleteCart);

export default router;
