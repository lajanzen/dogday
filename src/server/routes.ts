import express from "express";
import { readUser, readUsers, saveUser } from "./users";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/users/me", async (request, response, next) => {
  try {
    const { userId } = request.cookies;
    console.log(userId);
    if (!userId) {
      return response.status(401).end("Unauthorized! You have to login first.");
    }
    const user = await readUser({ _id: new ObjectId(userId) });
    if (!user) {
      response.status(404).send("User not found");
      return;
    }
    response.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.get("/users", async (_request, response) => {
  const users = await readUsers();
  response.json(users);
});

router.get("/users/:email", async (request, response) => {
  const user = await readUser({ email: request.params.email });
  response.json(user);
});

router.post("/users", async (request, response) => {
  console.log(request.body);
  await saveUser(request.body);
  response.json("New User added");
});

router.post("/users/login", async (request, response, next) => {
  try {
    const { email, password } = request.body;
    const user = await readUser({ email, password });
    if (!user) {
      response.status(404).send("User or password is incorrect");
      alert("User or password is incorrect");
      return;
    }
    response.setHeader(
      "Set-Cookie",
      `userId=${user._id};path=/;Max-Age=${365 * 24 * 60 * 60}`
    );
    response.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;
