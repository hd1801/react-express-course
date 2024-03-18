import { Request, Response } from "express";
import { CourseService } from "../services";

export async function getCourseById(req: Request, res: Response) {
  const courseId = parseInt(req.params.courseId);
  const course = await CourseService.getCourseById(courseId);
  if (course) {
    res.json(course);
  } else {
    res.sendStatus(404);
  }
}

export async function getAllCourses(req: Request, res: Response) {
  const courses = await CourseService.getAllCourses();
  res.json(courses);
}

export async function createCourse(req: Request, res: Response) {
  const newCourse = req.body;
  const file = req.file;
  try {
    const course = await CourseService.createCourse(newCourse, file);
    res.status(201).json(course);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteCourse(req: Request, res: Response) {
  const courseId = parseInt(req.params.courseId);
  const course = await CourseService.deleteCourse(courseId);
  if (course) {
    res.json(course);
  } else {
    res.sendStatus(404);
  }
}

export async function updateCourse(req: Request, res: Response) {
  const courseId = parseInt(req.params.courseId);
  const newCourse = req.body;
  const course = await CourseService.updateCourse(courseId, newCourse);
  if (course) {
    res.json(course);
  } else {
    res.sendStatus(404);
  }
}

export async function getCourseByAuthorIds(req: Request, res: Response) {
  const authorIds: number[] = req.body.authorIds;
  const courses = await CourseService.getCourseByAuthors(authorIds || []);
  res.json(courses);
}
