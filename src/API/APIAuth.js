import axios from "axios";

const BASE_URL = "http://3.88.14.239:80/api/auth/";

export const AuthLogin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await axios.post(BASE_URL + "signin", data, config, {
    withCredentials: true,
  });
  console.log(response.data);
  console.log(response.data.token);

  localStorage.setItem("Bearer", response.data.token);

  return response.data;
};
