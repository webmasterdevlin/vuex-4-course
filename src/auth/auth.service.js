import * as jwt from "jsonwebtoken";

export function logOut() {
  window.location = "/";
}

export function isValidToken() {
  const decoded = jwt.decode(token);
  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();
  return dateNow <= expiresAt;
}

export default {
  logOut,
  isValidToken,
};
