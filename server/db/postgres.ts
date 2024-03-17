import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5400,
  user: "postgres",
  password: "postgres",
  database: "course-db",
});

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database: ", error);
  }
}
export const db = drizzle(client);
