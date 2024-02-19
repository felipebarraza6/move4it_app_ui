import axios from "axios";
import methods from "./api";

const login = async (data) => {
  const request = await methods.POST_LOGIN("auth/users/login/", {
    email: data.email,
    password: data.password,
  });

  return request.data;
};

const get_profile = async () => {
  const user = JSON.parse(localStorage.getItem("user") || null);
  const request = await methods.GET(`auth/users/${user.username}/`);
  return request.data;
};

export const endpoints = {
  auth: {
    login: login,
    profile: get_profile,
  },
};