import { Authors, NewAuthor, db } from "../../db";

export class AuthorService {
  getAllAuthors() {
    return db.query.Authors.findMany();
  }
  getAuthorById(authorId: number) {
    return db.query.Authors.findFirst({
      where(author, { eq }) {
        return eq(author.id, authorId);
      },
    });
  }
  createAuthor(author: NewAuthor) {
    return db.insert(Authors).values(author).returning();
  }
}
