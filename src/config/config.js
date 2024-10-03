import dotenv from 'dotenv';

dotenv.config();

export const config = {
    mongoUri: `${process.env.MONGO_URL}${process.env.DB_NAME}`, 
    JWT_SECRET: process.env.JWT_SECRET || 'tu_secreto',
};
