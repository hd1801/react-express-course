import { NextFunction, Request, Response } from "express";
import { STATUS_CODES } from "http";
import { ZodError, z } from "zod";

export const validateMiddleware = (schema: z.AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map((issue: any) => ({
              message: `${issue.path.join('.')} is ${issue.message}`,
          }))
          res.status(400).json({ error: 'Invalid data', details: errorMessages });
        } else {
          res.status(500).json({ error: 'Internal Server Error' });
        }
    }
  };
};
