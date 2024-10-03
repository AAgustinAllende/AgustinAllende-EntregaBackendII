import { userRepository } from '../repositories/userRepository.js';

export const createUser = async (userData) => {
    const user = await userRepository.createUser(userData);
    return user;
};

export const getUserById = async (id) => {
    const user = await userRepository.getUserById(id);
    return user;
};

export const updateUser = async (id, userData) => {
    const updatedUser = await userRepository.updateUser(id, userData);
    return updatedUser;
};

export const deleteUser = async (id) => {
    const result = await userRepository.deleteUser(id);
    return result;
};
