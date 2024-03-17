import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const Authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export type Author = typeof Authors.$inferSelect;
export type NewAuthor = typeof Authors.$inferInsert;
