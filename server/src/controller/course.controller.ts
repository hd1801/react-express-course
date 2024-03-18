import { Request, Response } from "express";
import { CourseService } from "../services";

const courseService = new CourseService();

export async function getCourseById(req: Request, res: Response) {
  const courseId = parseInt(req.params.courseId);
  const course = await courseService.getCourseById(courseId);
  if (course) {
    res.json(course);
  } else {
    res.sendStatus(404);
  }
}

export async function getAllCourses(req: Request, res: Response) {
  const courses = await courseService.getAllCourses();
  res.json(courses);
}

export async function createCourse(req: Request, res: Response) {
  const newCourse = req.body;
  try {
    const course = await courseService.createCourse(newCourse);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
