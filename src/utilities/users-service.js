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
  // getItem returns null if there's no string
  const token = localStorage.getItem("token");
  if (!token) return null;
  // check & remove JWT if it is expired
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function getUser() {
  const token = getToken();
  console.log("THE TOKEN: ", token);
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}
