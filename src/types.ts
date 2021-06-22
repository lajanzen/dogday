import { ObjectId } from "bson";

export type UserSitter = {
  _id?: ObjectId;
  name: string;
  email: string;
  phone: number;
  city: string;
  experience?: string;
  password: string;
  photo?: string;
};

export type UserDog = {
  _id?: ObjectId;
  name: string;
  birth: number;
  email: string;
  phone: number;
  city: string;
  password: string;
  photo?: string;
};
