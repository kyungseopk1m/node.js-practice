import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const { MONGODB_URI } = process.env;
const client = new MongoClient(MONGODB_URI);

export async function run() {
    try {
        await client.connect();
        console.log('Connected correctly to server');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}

export const HolidaysDB = client.db('holidays');
