import axios from "axios";

const BASE_URL = "http://3.88.14.239:80/api/auth/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const AuthLogin = async (data) => {
  const response = await axios.post(BASE_URL + "signin", data, config, {
    withCredentials: true,
  });
  console.log(response.data);
  console.log(response.data.token);

  localStorage.setItem("Bearer", response.data.token);

  return response.data;
};

export const AuthRegister = async (data) => {
  const response = await axios.post(BASE_URL + "signup", data, config, {
    withCredentials: true,
  })
  console.log(response.data)
  return response.data
}