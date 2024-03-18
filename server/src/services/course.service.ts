import { Courses, NewCourse, db } from "../../db";

export class CourseService {
  getCourseById(courseId: number) {
    return db.query.Courses.findFirst({
      where(course, { eq }) {
        return eq(course.id, courseId);
      },
    });
  }

  getAllCourses() {
    return db.query.Courses.findMany({
      with: {
        author: true,
      },
    });
  }

  createCourse(course: NewCourse) {
    return db.insert(Courses).values(course).returning();
  }
}
