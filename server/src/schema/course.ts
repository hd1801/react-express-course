import {
  date,
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { Authors } from "../../db/schema/author";

export const Courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  createdBy: integer("CreatedBy")
    .notNull()
    .references(() => Authors.id),
  description: varchar("description", { length: 256 }).notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export type Course = typeof Courses.$inferSelect;
export type NewCourse = typeof Courses.$inferInsert;
