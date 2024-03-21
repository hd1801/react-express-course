import { instance } from "../config";
import { Course } from "../types";

export const getCourses = async (): Promise<Course[]> => {
  const response = await instance.get("/api/courses");
  return response.data;
};
