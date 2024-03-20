import { z } from "zod";

export const CreateCourseDto = z.object({
  title: z.string(),
  description: z.string().optional(),
  createdBy: z.preprocess((val) => Number(val), z.number()),
});

export const UpdateCourseDto = CreateCourseDto.partial();
