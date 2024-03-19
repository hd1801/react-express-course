import { Router } from "express";
import { upload } from "../config/multer";
import { validateMiddleware } from "../middleware/validation";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourseByAuthorIds,
  getCourseById,
  updateCourse,
} from "../controller";
import { CreateCourseDto, UpdateCourseDto } from "../dto";

const coursesRouter = Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.get("/:courseId", getCourseById);
coursesRouter.post(
  "/",
  validateMiddleware(CreateCourseDto),
  upload.single("thumbnail"),
  createCourse
);
coursesRouter.put(
  "/:courseId",
  validateMiddleware(UpdateCourseDto),
  upload.single("thumbnail"),
  updateCourse
);
coursesRouter.get("/filter-by-authors", getCourseByAuthorIds);
coursesRouter.delete("/:courseId", deleteCourse);

export { coursesRouter };
