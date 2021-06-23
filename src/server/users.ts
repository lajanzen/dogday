import { UserSitter } from "../types";
import { getUsersCollection } from "./database";

export const readUsers = async (): Promise<UserSitter[]> => {
  return await getUsersCollection().find().toArray();
};

export const readUser = async (
  user: Partial<UserSitter>
): Promise<UserSitter | null> => {
  const result = await getUsersCollection().findOne(user);
  if (!user) {
    throw new Error("There is no user with that email adress");
  }
  return result;
};

export const saveUser = async (newUser: UserSitter): Promise<void> => {
  await getUsersCollection().insertOne(newUser);
};
