import Ticket from '../models/Ticket.js';

class TicketRepository {
    async createTicket(ticketData) {
        const ticket = new Ticket(ticketData);
        return await ticket.save();
    }

    async getTicketById(ticketId) {
        return await Ticket.findById(ticketId);
    }

    async getAllTickets() {
        return await Ticket.find();
    }

    async deleteTicket(ticketId) {
        return await Ticket.findByIdAndDelete(ticketId);
    }
}

export default new TicketRepository();
