import { Router } from "express";
import { upload } from "../config/multer";
import { createAuthor, getAllAuthors, getAuthorById } from "../controller";
import { CreateAuthorDto } from "../dto";
import { validateMiddleware } from "../middleware";

const authorsRouter = Router();

authorsRouter.get("/", getAllAuthors);
authorsRouter.get("/:authorId", getAuthorById);
authorsRouter.post(
  "/",
  validateMiddleware(CreateAuthorDto),
  upload.single("avatar"),
  createAuthor
);

export { authorsRouter };
