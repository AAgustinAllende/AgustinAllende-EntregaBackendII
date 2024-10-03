import { Router } from 'express';
import { registerUser, loginUser, logout, currentUser } from '../controller/authController.js';
import { isAuthenticated } from '../middlewares/authMiddleware.js';
const router = Router();

// registrar usuario
router.post('/register', registerUser);

//  iniciar sesión
router.post('/login', loginUser);

// cerrar sesión
router.post('/logout', logout);

// obtener información del usuario actual
router.get('/current', isAuthenticated, currentUser);

export default router;
