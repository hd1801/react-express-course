import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { Files } from "./file";

export const Authors = pgTable("authors", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: text("description"),
  FileId: integer("FileId").references(() => Files.id),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const AuthorRelations = relations(Authors, ({ one }) => ({
  avatar: one(Files, {
    fields: [Authors.FileId],
    references: [Files.id],
  }),
}));

export type Author = typeof Authors.$inferSelect;
export type NewAuthor = typeof Authors.$inferInsert;
