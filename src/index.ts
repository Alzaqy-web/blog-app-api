import cors from "cors";
import express from "express";
import { PORT } from "./config/env";
import { errorMiddleware } from "./middlewares/error.middlwares";
import sampleRouter from "./routes/sample.router";

const app = express();

// config
app.use(cors());
app.use(express.json());

// routes
app.use("/samples", sampleRouter);

// error
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
});
