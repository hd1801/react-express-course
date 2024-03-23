import { Author } from "./author";
import { File } from "./file";

export interface Course {
  id: number;
  title: string;
  FileId: number;
  thumbnail?: File;
  createdBy: number;
  author?: Author;
  description: string;
  created_at: string;
  updated_at: string;
}
