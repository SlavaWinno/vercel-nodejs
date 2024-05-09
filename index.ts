// import * as dotenv from "dotenv";
import express, { Express } from "express";
// import cors from "cors";
// import mongoose from "mongoose";

// dotenv.config();

// const PORT: number = parseInt(process.env.PORT || "5000", 10);
const PORT: number = 5000;

const app: Express = express();

// app.use(cors());
app.use(express.json());

// app.set("trust proxy", true);

// app.use("/api/auth", authRouter);
// app.use("/api/forms", formRouter);
// app.use("/api/host", hostRouter);
// app.use("/api/company", companyRouter);
// app.use("/api/subject", subjectRouter);
// app.use("/api/inquiry", inquiryRouter);
// app.use("/api/mailset", mailSetRouter);

app.get("/", (req, res) => {
  res.send("How are you?");
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/info", (req, res) => {
  res.send("Some new information from DB");
});

// mongoose
//   .connect(process.env.DB_URL as string, {
//     dbName: "main",
//   })
//   .catch((err: Error) => console.error(err));

const server = app.listen(PORT, () => {
  console.log("Server is listening on PORT:" + PORT);
});

// Export the Express API
module.exports = app;
