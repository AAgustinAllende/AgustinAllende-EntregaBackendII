import express from 'express';
import { createTicket, getTicketById, getTickets, deleteTicket } from '../controller/ticketController.js';

const router = express.Router();

// Crear un ticket
router.post('/', createTicket);

// Obtener un ticket por ID
router.get('/:id', getTicketById);

// Obtener todos los tickets
router.get('/', getTickets);

// Eliminar un ticket
router.delete('/:id', deleteTicket);

export default router;
