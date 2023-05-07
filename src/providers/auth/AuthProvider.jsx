import { useState, useEffect, createContext } from "react";
import {
  getSessionFromStorage,
  removeSessionFromStorage,
} from "../../helpers/tokens";
import * as authService from "../../services/authService";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const accessToken = getSessionFromStorage('accessToken') || false;

    if (accessToken) {
      setIsAuth(true);
    }
  }, []);

  const register = async (form) => {
    await authService.register(form);
    setIsAuth(true);
  };

  const login = async (form) => {
    await authService.login(form);
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
    setCurrentUser({});
    removeSessionFromStorage("accessToken");
  };

  const value = {
    isAuth,
    currentUser,
    setCurrentUser,
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
