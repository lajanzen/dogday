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

export type UserType = UserSitter | UserDog;

export type CloudinaryImage = {
  access_mode: string;
  asset_id: string;
  bytes: number;
  created_at: string;
  etag: string;
  format: string;
  height: number;
  original_filename: string;
  placeholder: false;
  public_id: string;
  resource_type: string;
  secure_url: string;
  signature: string;
  tags: [];
  type: string;
  url: string;
  version: number;
  version_id: string;
  width: number;
};
