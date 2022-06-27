import axios from "axios";

const BASE_URL = "http://3.88.14.239:80/api/page/admin/";

export const getBuilding = async () => {
  const token = localStorage.getItem("Bearer");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  const response = await axios.get(BASE_URL + "building", config);
  return response.data;
};
