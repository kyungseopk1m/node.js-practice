import { MongoClient } from 'mongodb';

const { MONGODB_URI } = process.env;
const client = new MongoClient(MONGODB_URI);

export default function run () {
    try {
        client.connect();
        console.log('Connected correctly to server');
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.stack);
        }
    }
}

export const HolidaysDB = client.db('Holidays');