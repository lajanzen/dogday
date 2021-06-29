import { UserType } from "../types";
import { getUsersCollection } from "./database";

export const readUsers = async (): Promise<UserType[]> => {
  return await getUsersCollection().find().toArray();
};

export const readMatches = async (
  user: Partial<UserType>
): Promise<UserType[]> => {
  return await getUsersCollection().find(user).toArray();
};

export const readUser = async (
  user: Partial<UserType>
): Promise<UserType | null> => {
  const result = await getUsersCollection().findOne(user);
  if (!user) {
    throw new Error("There is no user with that email adress");
  }
  return result;
};

export const saveUser = async (newUser: UserType): Promise<void> => {
  await getUsersCollection().insertOne(newUser);
};
