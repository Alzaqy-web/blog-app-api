import express from "express";
import {
  CreateBlogController,
  getBlogBySlugController,
  getBlogsController,
} from "../controller/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.get("/:slug", getBlogBySlugController);
router.post("/", CreateBlogController);

export default router;
