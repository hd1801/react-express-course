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
  upload.single("thumbnail"),
  validateMiddleware(CreateCourseDto),
  createCourse
);
coursesRouter.put(
  "/:courseId",
  upload.single("thumbnail"),
  validateMiddleware(UpdateCourseDto),
  updateCourse
);
coursesRouter.get("/filter-by-authors", getCourseByAuthorIds);
coursesRouter.delete("/:courseId", deleteCourse);

export { coursesRouter };
