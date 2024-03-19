import { z } from "zod";

export const CreateCourseDto = z.object({
  title: z.string(),
  description: z.string().optional(),
  authorId: z.number(),
});

export const UpdateCourseDto = CreateCourseDto.partial();
