import { Authors, Files, NewAuthor, db } from "../../db";

export class AuthorService {
  static getAllAuthors() {
    return db.query.Authors.findMany({
      with: {
        avatar: true,
      },
    });
  }

  static getAuthorById(authorId: number) {
    return db.query.Authors.findFirst({
      with: {
        avatar: true,
      },
      where(author, { eq }) {
        return eq(author.id, authorId);
      },
    });
  }

  static async createAuthor(author: NewAuthor, file?: Express.Multer.File) {
    if (!file) {
      return db.insert(Authors).values(author).returning();
    }
    return db.transaction(async (tx) => {
      const avatar = await tx
        .insert(Files)
        .values({
          mimeType: file.mimetype,
          name: file.filename,
          size: file.size || 0,
          url: file.path,
        })
        .returning();

      return tx
        .insert(Authors)
        .values({ ...author, FileId: avatar[0]?.id })
        .returning();
    });
  }
}
