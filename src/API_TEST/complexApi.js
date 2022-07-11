import axiosClient from "./axiosClient";

const complexApi = {
  login: (params) => {
    const url = "auth/login";
    return axiosClient.post(url, params);
  },
  register: (params) => {
    const url = "auth/register";
    return axiosClient.post(url, params);
  },
  getAllUser: (params) => {
    const url = "user";
    return axiosClient.get(url, params);
  },
  getUserById: (id, params) => {
    const url = `user/${id}`;
    return axiosClient.get(url, params);
  },
  getThread: (params) => {
    const url = "thread/";
    console.log(params);
    return axiosClient.get(url + `pages?size=5&page=${params.curentPage}`);
  },
  getThreadByUserId: (id, params) => {
    const url = `thread/user/${id}`;
    return axiosClient.get(url, params);
  },
  getCategory: (params) => {
    const url = "category/";
    return axiosClient.get(url, params);
  },
  postThread: (params, token) => {
    const url = "thread";
    return axiosClient.post(url, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  likeThread: (id, token) => {
    const url = `thread/${id}`;
    return axiosClient.put(url, id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export default complexApi;