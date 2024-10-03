import { Ticket } from '../models/Ticket.js';

class TicketDAO {
    async createTicket(ticketData) {
        const ticket = new Ticket(ticketData);
        return await ticket.save();
    }

    async getAllTickets() {
        return await Ticket.find();
    }
}

export const ticketDAO = new TicketDAO();
