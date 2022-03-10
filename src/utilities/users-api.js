const BASE_URL = "/api/users";

export async function signUp(userData) {
  // fetch uses an options object as second argument to make requests besides GET, include data, headers, etc
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // fetch requires data payload to be stringified and assigned to body propery on the options object
    body: JSON.stringify(userData),
  });
  if (res.ok) {
    // res.json() will resolve the JWT
    return res.json();
  } else {
    throw new Error("Invalid Sign Up - API Method");
  }
}
