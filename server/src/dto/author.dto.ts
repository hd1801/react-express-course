import { z } from "zod";

export const CreateAuthorDto = z.object({
  name: z.string(),
  description: z.string().optional(),
  FileId: z.number().optional(),
});

export const UpdateAuthorDto = CreateAuthorDto.partial();
