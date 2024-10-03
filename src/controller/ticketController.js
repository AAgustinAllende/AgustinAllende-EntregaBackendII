import Ticket from '../models/Ticket.js';

export const createTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
};

export const getTickets = async (req, res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
};

export const getTicketById = async (req, res) => {
    const { id } = req.params;
    const ticket = await Ticket.findById(id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.json(ticket);
};

export const deleteTicket = async (req, res) => {
    const { id } = req.params;
    await Ticket.findByIdAndDelete(id);
    res.status(204).send();
};
