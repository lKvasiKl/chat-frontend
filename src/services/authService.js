import { addSessionToStorage } from "../helpers/tokens";
import { request } from "./axiosService";

const register = async ({ nickname, password }) => {
  const response = await request({
    url: "/api/v1/auth/register",
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
    url: "/api/v1/auth",
    method: "POST",
    data: {
      nickname,
      password,
    },
  });

  addSessionToStorage("accessToken", response.token);
};

export { register, login };
