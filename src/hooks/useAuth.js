import { useContext } from "react";
import { AuthContext } from "../providers/auth/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth };
