import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Client } from "pg";

(async () => {
  const connection = new Client({
    host: "localhost",
    port: 5400,
    user: "postgres",
    password: "postgres",
    database: "course-db",
  });
  const db = drizzle(connection);
  console.log();

  await connection.connect();
  // this is required otherwise it will hang, nk mentioned this
  await migrate(db, {
    migrationsFolder: "drizzle",
  })
    .then(() => console.log("Migrations complete"))
    .finally(async () => await connection.end());
})();
