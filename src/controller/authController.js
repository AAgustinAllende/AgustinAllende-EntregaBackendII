import User from '../models/User.js';
import bcrypt from 'bcrypt';
import { config } from '../config/config.js';
import jwt from 'jsonwebtoken';


export const registerUser = async (req, res) => {
    const { email, password, role } = req.body;
    
    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente!!' });
    } catch (error) {
        res.status(500).json({ message: '❌', error });
    }
};


export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Contraseña o email inválidos' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña o email inválidos' });
        }

        const token = jwt.sign({ id: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};


export const logout = (req, res) => {
    res.json({ message: 'Sesión finalizada' });
};


export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); // con este metodo se excluye la contraseña
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error 🚫', error });
    }
};
