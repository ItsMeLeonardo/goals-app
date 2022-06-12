import mongoose from "mongoose";
import type { ConnectOptions } from "mongoose";
import type { dbConnectionCache } from "lib/dbConnect/type";

const MONGODB_URI = process.env.MONGODB_URI;

const errorMessage =
  "Please define the MONGODB_URI environment variable inside .env.local";

if (!MONGODB_URI) {
  throw new Error(errorMessage);
}

declare global {
  var mongoose: dbConnectionCache;
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached: dbConnectionCache = global.mongoose!;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (!MONGODB_URI) {
    throw new Error(errorMessage);
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts: ConnectOptions = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
