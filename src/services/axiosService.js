import { getSessionFromStorage } from "../helpers/tokens";
import { SERVER_URL } from "../constants/serverPath";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: SERVER_URL,
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
