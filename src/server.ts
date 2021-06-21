import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import { connectDB } from "./utils/database";
// import { connectDB } from "./utils/database";

const { PORT = 3000 } = process.env;

const app = express();

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

app.listen(PORT, () => {
  console.log(`Boilerplate listening at http://localhost:${PORT}`);
});

const start = async () => {
  if (process.env.MONGODB_URL === undefined) {
    throw new Error("Missing env MONGODB_URL");
  }

  await connectDB(process.env.MONGODB_URL);
};

start();
