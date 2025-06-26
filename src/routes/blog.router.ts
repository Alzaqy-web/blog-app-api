import express from "express";
import {
  CreateBlogController,
  getBlogsController,
} from "../controller/blog.controller";

const router = express.Router();

router.get("/", getBlogsController);
router.post("/", CreateBlogController);

export default router;
