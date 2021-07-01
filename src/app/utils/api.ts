import { CloudinaryImage, UserDog, UserSitter } from "../../types";

export async function postUser(
  user: UserSitter | UserDog
): Promise<UserSitter> {
  const response = await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: UserSitter = await response.json();
  return result;
}

export async function verifyLogin(
  user: Partial<UserSitter | UserDog>
): Promise<UserSitter | UserDog> {
  const response = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }
  const result: UserSitter | UserDog = await response.json();
  return result;
}

export async function uploadProfilePicture(
  pictureFile: File
): Promise<CloudinaryImage> {
  const formData = new FormData();
  formData.append("file", pictureFile);
  formData.append(
    "upload_preset",
    `${import.meta.env.VITE_CLOUDINARY_PRESET_NAME}`
  );

  const cloudinaryResponse = await fetch(
    `https://api.cloudinary.com/v1_1/${
      import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    }/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const cloudinaryResult = await cloudinaryResponse.json();
  return cloudinaryResult;
}
