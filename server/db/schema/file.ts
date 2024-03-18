import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const Files = pgTable("files", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  mimeType: varchar("mimeType", { length: 256 }).notNull(),
  url: varchar("url", { length: 256 }).notNull(),
  size: integer("size").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export type File = typeof Files.$inferSelect;
export type NewFile = typeof Files.$inferInsert;
