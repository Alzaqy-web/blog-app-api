import express from "express";
import { CreateBlogController } from "../controller/blog.controller";

const router = express.Router();

router.post("/", CreateBlogController);

export default router;
