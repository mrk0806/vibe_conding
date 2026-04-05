import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => ({ status: "pzn project is running", version: "1.0.0" }))
  .group("/users", (app) =>
    app
      .get("/", async () => {
        if (!db) {
          return { error: "Database connection is not initialized. Please check your DATABASE_URL in .env." };
        }
        try {
          return await db.select().from(users);
        } catch (error) {
          return { error: "Database query failed. Ensure your MySQL server is running and accessible." };
        }
      })
      .post("/", async ({ body }) => {
        // Implementation for creating user would go here
        return { message: "User creation endpoint", body };
      })
  )
  .listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
