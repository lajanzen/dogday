import express from "express";
import { readUser, readUsers, saveUser } from "./users";

const router = express.Router();

router.get("/users", async (_request, response) => {
  const users = await readUsers();
  response.json(users);
});

router.get("/users/:email", async (request, response) => {
  const user = await readUser(request.params.email);
  response.json(user);
});

router.post("/users", async (request, response) => {
  await saveUser(request.body);
  response.json("New User added");
});

export default router;
