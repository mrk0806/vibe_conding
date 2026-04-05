import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn("⚠️ DATABASE_URL is not defined in environment variables. Database features will be unavailable.");
}

const connection = databaseUrl 
  ? await mysql.createConnection(databaseUrl).catch(err => {
      console.error("❌ Failed to connect to MySQL:", err.message);
      return null;
    })
  : null;

export const db = connection ? drizzle(connection, { schema, mode: "default" }) : null;
