import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { CHAT_ROUTE } from "../../constants/routePath";

const GuestRoute = ({ children }) => {
  const { isAuth } = useAuth();
  const location = useLocation();

  if (isAuth) {
    return <Navigate to={location.state?.from?.pathname || CHAT_ROUTE} />;
  }

  return children;
};

export default GuestRoute;
