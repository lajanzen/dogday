import { UserSitter } from "../../types";

export async function postUser(user: UserSitter): Promise<UserSitter> {
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
