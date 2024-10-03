import { ticketRepository } from '../repositories/ticketRepository.js';

export const createTicket = async (ticketData) => {
    const ticket = await ticketRepository.createTicket(ticketData);
    return ticket;
};

export const getTicketById = async (id) => {
    const ticket = await ticketRepository.getTicketById(id);
    return ticket;
};

export const getAllTickets = async () => {
    const tickets = await ticketRepository.getAllTickets();
    return tickets;
};

export const deleteTicket = async (id) => {
    const result = await ticketRepository.deleteTicket(id);
    return result;
};
