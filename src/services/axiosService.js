import axios from "axios";
import { getSessionFromStorage } from "../helpers/tokens";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9000",
});

const request = async ({ headers = {}, method, url, data, params }) => {
  const accessToken = getSessionFromStorage("accessToken") || {};

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  const options = {
    headers,
    method,
    url,
    data,
    params,
  };

  try {
    const result = await axiosInstance(options);

    return result.data;
  } catch (error) {
    throw error;
  }
};

export { request };
