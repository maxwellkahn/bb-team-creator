import * as usersAPI from "./users-api";

export async function signUp(userData) {
  try {
    const token = await usersAPI.signUp(userData);
    return token;
  } catch {
    throw new Error("Invalid Sign Up");
  }
}
