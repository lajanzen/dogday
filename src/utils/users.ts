import { UserSitter } from "../types";
import { getUsersCollection } from "./database";

export const readUsers = async (): Promise<UserSitter[]> => {
  return await getUsersCollection().find().toArray();
};

export const readUser = async (
  email: string
): Promise<UserSitter | undefined> => {
  const user = await getUsersCollection().findOne({ email });
  if (!user) {
    throw new Error("There is no user with that email adress");
  }
  return user;
};

export const saveUser = async (newUser: UserSitter): Promise<void> => {
  await getUsersCollection().insertOne({ ...newUser });
};
