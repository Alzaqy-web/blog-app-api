import { NextFunction, Request, Response } from "express";
import { createBlogService } from "../services/blog/create-blog.service";

export const CreateBlogController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await createBlogService(req.body);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
