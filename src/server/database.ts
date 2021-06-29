import { Collection, MongoClient } from "mongodb";
import { UserType } from "../types";

let client: MongoClient;
export const connectDB = async (url: string): Promise<void> => {
  client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
};

export const getCollection = <T>(name: string): Collection<T> => {
  return client.db().collection<T>(name);
};

export const getUsersCollection = (): Collection<UserType> => {
  return getCollection<UserType>("users");
};
