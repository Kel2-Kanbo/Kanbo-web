import axios from "axios";
import Cookies from "universal-cookie";

const BASE_URL = "/api/auth/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

// const cookie = new Cookies();

export const AuthLogin = async (data) => {
  return await axios.post(BASE_URL + "signin", data, config, {
    withCredentials: true,
  }).then((response) => {
    if(response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  })
  // if (response.data.token) {
  // }

  // cookie.set("Bearer", response.data.token);
  // localStorage.setItem("Bearer", response.data.token);

};

export const logout = async () => {
  localStorage.removeItem("user");
}

export const AuthRegister = async (data) => {
  const response = await axios.post(BASE_URL + "signup", data, config, {
    withCredentials: true,
  })
  console.log(response.data)
  return response.data
}