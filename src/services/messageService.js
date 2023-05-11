import { SERVER_URL, SEND_MESSAGE } from "../constants/serverPath";
import { request } from "./axiosService";

const getMessages = async (before, size) => {
  return await request({
    url: `${SERVER_URL}${SEND_MESSAGE}`,
    method: "GET",
    params: {
      before: before,
      size: size,
    },
  });
};

export { getMessages };
