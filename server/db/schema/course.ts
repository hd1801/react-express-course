import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { Authors } from "./author";
import { Files } from "./file";

export const Courses = pgTable("courses", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  FileId: integer("FileId").references(() => Files.id),
  createdBy: integer("CreatedBy")
    .notNull()
    .references(() => Authors.id),
  description: text("description").notNull(),
  created_at: timestamp("created_at").defaultNow(),
  updated_at: timestamp("updated_at").defaultNow(),
});

export const CoursesRelation = relations(Courses, ({ one }) => ({
  author: one(Authors, {
    fields: [Courses.createdBy],
    references: [Authors.id],
  }),
  thumbnail: one(Files, {
    fields: [Courses.FileId],
    references: [Files.id],
  }),
}));
export type Course = typeof Courses.$inferSelect;
export type NewCourse = typeof Courses.$inferInsert;
