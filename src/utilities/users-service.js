import * as usersAPI from "./users-api";

export async function signUp(userData) {
  try {
    // Delegate network request code to users-api.js API module that will return JWT
    const token = await usersAPI.signUp(userData);
    // persist the "token"
    localStorage.setItem("token", token);
    return getUser();
  } catch {
    throw new Error("Invalid Sign Up - Service Method");
  }
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}
