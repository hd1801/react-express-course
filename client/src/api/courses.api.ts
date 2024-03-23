import { instance } from "../config";
import { Course } from "../types";

export const getCourses = async (): Promise<Course[]> => {
  const response = await instance.get("/api/courses");
  return response.data;
};

export const getCourseById = async (courseId?: string): Promise<Course> => {
  const response = await instance.get(`/api/courses/${courseId}`);
  return response.data;
};

export const deleteCourse = async (courseId?: string): Promise<void> => {
  await instance.delete(`/api/courses/${courseId}`);
};
