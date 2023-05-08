import { getSessionFromStorage } from "./tokens";

const getCurrentUserId = () => {
  const accessToken = getSessionFromStorage("accessToken");

  const decodedPayload = JSON.parse(window.atob(accessToken.split(".")[1]));

  return decodedPayload["x-userId"];
};

export { getCurrentUserId };
