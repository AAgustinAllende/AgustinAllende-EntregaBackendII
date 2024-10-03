import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';

export const isAuthenticated = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = decoded; // Guarda la información del usuario
        next();
    });
};
