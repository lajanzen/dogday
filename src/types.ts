export type UserSitter = {
  name: string;
  email: string;
  phone: number;
  city: string;
  experience?: string;
  password: string;
  photo?: string;
};

export type UserDog = {
  name: string;
  birth: number;
  email: string;
  phone: number;
  city: string;
  password: string;
  photo?: string;
};
