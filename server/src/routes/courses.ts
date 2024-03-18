import { Router } from "express";
import { createCourse, getAllCourses, getCourseById } from "../controller";
import { upload } from "../config/multer";

const coursesRouter = Router();

coursesRouter.get("/", getAllCourses);
coursesRouter.get("/:courseId", getCourseById);
coursesRouter.post("/", upload.single("thumbnail"), createCourse);

export { coursesRouter };
