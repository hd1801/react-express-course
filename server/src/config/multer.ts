import crypto from "crypto";
import fs from "fs";
import multer from "multer";
import { extname } from "path";

const uploadDirectory = "uploads";
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}
export const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      const hash = crypto.createHash("sha256");
      hash.update(Date.now().toString() + file.originalname);
      const uniqueFilename = hash.digest("hex") + extname(file.originalname);
      cb(null, uniqueFilename);
    },
  }),
});
