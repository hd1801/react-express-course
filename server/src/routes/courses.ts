import { Router } from "express";
import { upload } from "../config/multer";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseByAuthorIds,
  getCourseById,
  updateCourse,
} from "../controller";

const coursesRouter = Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.get("/:courseId", getCourseById);
coursesRouter.post("/", upload.single("thumbnail"), createCourse);
coursesRouter.put("/:courseId", upload.single("thumbnail"), updateCourse);
coursesRouter.get("/filter-by-authors", getCourseByAuthorIds);
coursesRouter.delete("/:courseId", deleteCourse);

export { coursesRouter };
