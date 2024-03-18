import { Request, Response } from "express";
import { AuthorService } from "../services";

const authorService = new AuthorService();

export async function getAuthorById(req: Request, res: Response) {
  const authorId = parseInt(req.params.authorId);
  const author = await authorService.getAuthorById(authorId);
  if (author) {
    res.json(author);
  } else {
    res.sendStatus(404);
  }
}

export async function getAllAuthors(req: Request, res: Response) {
  const authors = await authorService.getAllAuthors();
  res.json(authors);
}

export async function createAuthor(req: Request, res: Response) {
  const newAuthor = req.body;
  const file = req.file;
  try {
    const author = await authorService.createAuthor(newAuthor);
    res.status(201).json(file);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
