import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "/api/auth/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

const cookie = new Cookies();

export const AuthLogin = async (data) => {
  const response = await axios.post(BASE_URL + "signin", data, config, {
    withCredentials: true,
  });
  console.log(response.data);
  console.log(response.data.token);

  cookie.set("Bearer", response.data.token);

  return response.data;
};

export const AuthRegister = async (data) => {
  const response = await axios.post(BASE_URL + "signup", data, config, {
    withCredentials: true,
  })
  console.log(response.data)
  return response.data
}