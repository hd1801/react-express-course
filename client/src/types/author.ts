import { File } from "./file";

export interface Author {
  id: number;
  name: string;
  description: string;
  FileId: number;
  avatar: File;
  created_at: Date;
  updated_at: Date;
}
