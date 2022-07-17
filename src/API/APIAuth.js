import axios from "axios";

const BASE_URL = "/api/auth/";
const config = {
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const AuthLogin = async (data) => {
  return await axios
    .post(BASE_URL + "signin", data, config, {
      withCredentials: true,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

export const logout = async () => {
  localStorage.removeItem("user");
};

export const AuthRegister = async (data) => {
  const response = await axios.post(BASE_URL + "signup", data, config, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};
