import { ObjectId } from "bson";

export type User = {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: string;
  city: string;
  password: string;
  photo: string;
};

export type UserSitter = User & {
  type: "sitter";
  experience: string;
};

export type UserDog = User & {
  type: "dog";
  birthYear: number;
};
