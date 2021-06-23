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
  console.log(request.body);
  await saveUser(request.body);
  response.json("New User added");
});

// router.post("/users/login", async (request, response) => {
//   const { email, password } = request.body;
//   const user = await readUser();
// });

export default router;
