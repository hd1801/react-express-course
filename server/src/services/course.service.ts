import { eq } from "drizzle-orm";
import { unlink } from "fs";
import { Courses, Files, NewCourse, db } from "../../db";

export class CourseService {
  static getCourseById(courseId: number) {
    return db.query.Courses.findFirst({
      where(course, { eq }) {
        return eq(course.id, courseId);
      },
      with: {
        author: true,
        thumbnail: true,
      },
    });
  }

  static getAllCourses() {
    return db.query.Courses.findMany({
      with: {
        author: {
          with: {
            avatar: true,
          },
        },
        thumbnail: true,
      },
    });
  }

  static deleteCourse(courseId: number) {
    return db.transaction(async (tx) => {
      const course = await tx.query.Courses.findFirst({
        where(course, { eq }) {
          return eq(course.id, courseId);
        },
        with: {
          thumbnail: true,
        },
      });

      const deletedCourse = await tx
        .delete(Courses)
        .where(eq(Courses.id, courseId))
        .returning();

      if (course?.thumbnail) {
        try {
          await unlink(course.thumbnail.url, () => {
            console.log("File deleted");
          });
        } catch (error) {
          tx.rollback();
        }

        await tx.delete(Files).where(eq(Files.id, course.thumbnail.id));
      }
      return deletedCourse;
    });
  }

  static createCourse(course: NewCourse, file?: Express.Multer.File) {
    if (!file) {
      return db.insert(Courses).values(course).returning();
    }
    return db.transaction(async (tx) => {
      const thumbnail = await tx
        .insert(Files)
        .values({
          mimeType: file.mimetype,
          name: file.filename,
          size: file.size || 0,
          url: file.path,
        })
        .returning();

      return tx
        .insert(Courses)
        .values({ ...course, FileId: thumbnail[0]?.id })
        .returning();
    });
  }

  static updateCourse(
    courseId: number,
    newCourse: NewCourse,
    file?: Express.Multer.File
  ) {
    if (!file) {
      return db
        .update(Courses)
        .set(newCourse)
        .where(eq(Courses.id, courseId))
        .returning();
    }

    // Idealy I would break this into functions but drizzle doesnt seems to allow us to do that without using hacks
    return db.transaction(async (tx) => {
      const previousFile = await tx.query.Courses.findFirst({
        where(course, { eq }) {
          return eq(course.id, courseId);
        },
        with: {
          thumbnail: true,
        },
      });

      if (previousFile?.thumbnail) {
        try {
          await unlink(previousFile.thumbnail.url, () => {
            console.log("File deleted");
          });
        } catch (error) {
          tx.rollback();
        }

        await tx.delete(Files).where(eq(Files.id, previousFile.thumbnail.id));
      }
      const thumbnail = await tx
        .insert(Files)
        .values({
          mimeType: file.mimetype,
          name: file.filename,
          size: file.size || 0,
          url: file.path,
        })
        .returning();

      return tx
        .update(Courses)
        .set({ ...newCourse, FileId: thumbnail[0]?.id })
        .where(eq(Courses.id, courseId))
        .returning();
    });
  }
  static getCourseByAuthors(authorIds: number[]) {
    return db.query.Courses.findMany({
      where({ createdBy }, { inArray }) {
        return inArray(createdBy, authorIds);
      },
    });
  }
}
