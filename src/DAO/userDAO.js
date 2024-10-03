import { User } from '../models/User.js';

class UserDAO {
    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    async getUserById(id) {
        return await User.findById(id);
    }
}

export const userDAO = new UserDAO();
