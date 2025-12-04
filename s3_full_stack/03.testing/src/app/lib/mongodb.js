// lib/mongodb.js
import { MongoClient } from 'mongodb';

const MONGODB_URI = 'Your Mongodb connection url';

if (!MONGODB_URI) {
  throw new Error('MONGODB_URI is required.');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // preserve across module reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI);
  clientPromise = client.connect();
}

export default clientPromise;
