import axios from "axios";

const BASE_URL = "http://3.88.14.239:80/api/page/admin/";

const token = localStorage.getItem("Bearer");
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export const getBuilding = async () => {
  const response = await axios.get(BASE_URL + "building", config);
  return response.data;
};

export const createBuilding = async (data) => {
  const response = await axios.post(BASE_URL + "building/create", data, config);
  return response.data;
};

export const deleteBuilding = async (id) => {
  const response = await axios.delete(BASE_URL + "building/" + id, config);
  return response.data;
};

export const editBuilding = async (id, data) => {
  const response = await axios.put(BASE_URL + "building/" + id, data, config);
  return response.data;
};

export const createNearby = async (data) => {
  const response = await axios.post(BASE_URL + "building/facility/create", data, config);
  return response.data;
}

export const getCategoryNearby = async () => {
  const response = await axios.get(BASE_URL + "building/facility/category", config);
  return response.data;
}

export const getComplex = async () => {
  const response = await axios.get(BASE_URL + "complex/findAll", config);
  return response.data;
};

export const createComplex = async (data) => {
  const response = await axios.post(BASE_URL + "complex/create", data, config);
  return response.data;
};

export const deleteComplex = async (id) => {
  const response = await axios.delete(BASE_URL + "complex/delete/" + id, config);
  return response.data;
};

export const editComplex = async (id, data) => {
  const response = await axios.put(BASE_URL + "complex/update/" + id, data, config);
  return response.data;
};

export const getProvince = async () => {
  const response = await axios.get(BASE_URL + "province/findAll", config);
  return response.data;
}

export const getCity = async (id) => {
  const response = await axios.get(BASE_URL + "city/list/" + id, config);
  return response.data
}

export const getDistrict = async (id) => {
  const response = await axios.get(BASE_URL + "district/list/" + id, config)
  return response.data
}

export const getRoom = async () => {
  const response = await axios.get(BASE_URL + "room", config);
  return response.data;
};

export const createRoom = async (data) => {
  const response = await axios.post(BASE_URL + "room", data, config);
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await axios.delete(BASE_URL + "room/" + id, config);
  return response.data;
};

export const editRoom = async (id, data) => {
  const response = await axios.put(BASE_URL + "room/" + id, data, config);
  return response.data;
};