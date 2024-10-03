import User from '../models/User.js';

class UserRepository {
    async createUser(userData) {
        const user = new User(userData);
        return await user.save();
    }

    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    async getUserById(userId) {
        return await User.findById(userId);
    }

    async updateUser(userId, userData) {
        return await User.findByIdAndUpdate(userId, userData, { new: true });
    }

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }
}

export default new UserRepository();
