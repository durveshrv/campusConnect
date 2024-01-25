import http from "./httpService";
import { api } from "../config.js";


export function register(user) {
  return http.post(api.usersEndPoint + "register", {
    name: user.name,
    phoneno:user.phoneno,
    email: user.email,
    username: user.username,
    password: user.password,
    gender:user.gender,
  });
}