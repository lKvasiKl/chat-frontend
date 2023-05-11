import { AUTH_URL, REGISTER_URL } from "../constants/serverPath";
import { addSessionToStorage } from "../helpers/tokens";
import { request } from "./axiosService";

const register = async ({ nickname, password }) => {
  const response = await request({
    url: REGISTER_URL,
    method: "POST",
    data: {
      nickname,
      password,
    },
  });

  addSessionToStorage("accessToken", response.token);
};

const login = async ({ nickname, password }) => {
  const response = await request({
    url: AUTH_URL,
    method: "POST",
    data: {
      nickname,
      password,
    },
  });

  addSessionToStorage("accessToken", response.token);
};

export { register, login };
