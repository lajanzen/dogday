import { UserSitter } from "../types";
import { getUsersCollection } from "./database";

export const readUsers = async (): Promise<UserSitter[]> => {
  return await getUsersCollection().find().toArray();
};
