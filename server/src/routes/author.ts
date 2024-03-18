import { Router } from "express";
import { createAuthor, getAllAuthors, getAuthorById } from "../controller";
import { upload } from "../config/multer";

const authorsRouter = Router();

authorsRouter.get("/", getAllAuthors);
authorsRouter.get("/:authorId", getAuthorById);
authorsRouter.post("/", upload.single("avatar"), createAuthor);

export { authorsRouter };
