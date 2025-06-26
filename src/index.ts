import cors from "cors";
import express from "express";
import { PORT } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middlwares";
import sampleRouter from "./routes/sample.router";
import blogRouter from "./routes/blog.router";

const app = express();

// config
app.use(cors());
app.use(express.json());

// routes
app.use("/samples", sampleRouter);
app.use("/blogs", blogRouter);

// error
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
