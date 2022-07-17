import axios from "axios";
import APIAuthHeader from "./APIAuthHeader";

const BASE_URL = "http://3.80.97.57/api/page/admin/";

export const getBuilding = async () => {
  const response = await axios.get(BASE_URL + "building", APIAuthHeader());
  return response.data;
};

export const createBuilding = async (data) => {
  const response = await axios.post(BASE_URL + "building/create", data, APIAuthHeader());
  return response.data;
};

export const deleteBuilding = async (id) => {
  const response = await axios.delete(BASE_URL + "building/" + id, APIAuthHeader());
  return response.data;
};

export const editBuilding = async (id, param) => {
  const response = await axios.put(BASE_URL + "building/" + id, param, APIAuthHeader());
  return response.data;
};

export const createNearby = async (data) => {
  const response = await axios.post(
    BASE_URL + "building/facility/create",
    data,
    APIAuthHeader()
  );
  return response.data;
};

export const getCategoryNearby = async () => {
  const response = await axios.get(
    BASE_URL + "building/facility/category/findAll",
    APIAuthHeader()
  );
  return response.data;
};

export const getComplex = async () => {
  const response = await axios.get(BASE_URL + "complex/findAll", APIAuthHeader());
  return response.data;
};

export const createComplex = async (data) => {
  const response = await axios.post(BASE_URL + "complex/create", data, APIAuthHeader());
  return response.data;
};

export const deleteComplex = async (id) => {
  const response = await axios.delete(
    BASE_URL + "complex/delete/" + id,
    APIAuthHeader()
  );
  return response.data;
};

export const editComplex = async (id, data) => {
  const response = await axios.put(
    BASE_URL + "complex/update/" + id,
    data,
    APIAuthHeader()
  );
  return response.data;
};

export const getProvince = async () => {
  const response = await axios.get(BASE_URL + "province/findAll", APIAuthHeader());
  return response.data;
};

export const getCity = async (id) => {
  const response = await axios.get(BASE_URL + "city/list/" + id, APIAuthHeader());
  return response.data;
};

export const getDistrict = async (id) => {
  const response = await axios.get(BASE_URL + "district/list/" + id, APIAuthHeader());
  return response.data;
};

export const getRoom = async () => {
  const response = await axios.get(BASE_URL + "room", APIAuthHeader());
  return response.data;
};

export const createRoom = async (data) => {
  const response = await axios.post(BASE_URL + "room", data, APIAuthHeader());
  return response.data;
};

export const deleteRoom = async (id) => {
  const response = await axios.delete(BASE_URL + "room/" + id, APIAuthHeader());
  return response.data;
};

export const editRoom = async (id, data) => {
  const response = await axios.put(BASE_URL + "room/" + id, data, APIAuthHeader());
  return response.data;
};

export const createRoomItem = async (data) => {
  const response = await axios.post(
    BASE_URL + "building/room-item/create",
    data,
    APIAuthHeader()
  );
  return response.data;
};
