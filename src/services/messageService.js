import { request } from "./axiosService";

const getMessages = async (before, size) => {
  return await request({
    url: "http://localhost:9000/api/v1/message",
    method: "GET",
    params: {
      before: before,
      size: size,
    },
  });
};

export { getMessages };
