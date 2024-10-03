import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'; 
import { config } from './config/config.js'; 
import cartsRoutes from './routes/carts.js';
import productsRoutes from './routes/products.js';
import ticketsRoutes from './routes/tickets.js';
import sessionsRoutes from './routes/sessions.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config(); 

const app = express();
const PORT = config.port || process.env.PORT || 5000; 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/carts', cartsRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/tickets', ticketsRoutes);
app.use('/api/sessions', sessionsRoutes);

// Manejo de errores
app.use(errorHandler);

// Conexión a la base de datos
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('Conectado a la base de datos');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error conectando a la base de datos', err);
    });
