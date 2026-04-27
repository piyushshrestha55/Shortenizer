import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // In dev mode, use a global variable so we don't create multiple clients
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri); // no options needed
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, always create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
