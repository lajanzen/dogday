import { ObjectId } from "bson";

export type User = {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
  photo: string;
  type: "dog" | "sitter";
};

export type UserSitter = User & {
  experience: string;
};

export type UserDog = User & {
  birthYear: number;
};
