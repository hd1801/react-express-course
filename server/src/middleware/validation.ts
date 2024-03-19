import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const validateMiddleware = (schema: z.AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  };
};
