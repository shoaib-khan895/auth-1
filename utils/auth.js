import axios from "axios";
import { enableExpoCliLogging } from "expo/build/logs/Logs";

const API_KEY = "AIzaSyC_HT79WeZ-kcv2XG5V9rzLzcaFQ7gGoEw";
export async function Authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
}
export async function createUser(email, password) {
  await Authenticate("signUp", email, password);
}

export async function login(email, password) {
  await Authenticate("signInWithPassword", email, password);
}
