import dotenv from "dotenv";
dotenv.config();

import path from "path";
import express from "express";
import { connectDB } from "./utils/database";
import { readUser, readUsers, saveUser } from "./utils/users";

if (process.env.MONGODB_URL === undefined) {
  throw new Error("Missing env MONGO_URL");
}

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.json());

app.get("/api/users", async (_request, response) => {
  const users = await readUsers();
  response.json(users);
});

app.get("/api/users/:email", async (request, response) => {
  const user = await readUser(request.params.email);
  response.json(user);
});

app.post("/api/users", async (request, response) => {
  await saveUser(request.body);
  response.json("New User added");
});

// Serve storybook production bundle
app.use("/storybook", express.static("dist/storybook"));

// Serve app production bundle
app.use(express.static("dist/app"));

// Handle client routing, return all requests to the app
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "app/index.html"));
});

connectDB(process.env.MONGODB_URL).then(() => {
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`DogDay listening at http://localhost:${PORT}`);
  });
});
