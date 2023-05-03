import { Navigate, Route, Routes } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../constants/routePath";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AppContainer from "../layouts/AppConatiner/AppContainer";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route element={<AppContainer />}>
        <Route
          path="/"
          element={<Navigate to={LOGIN_ROUTE} replace={true} />}
        />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTER_ROUTE} element={<Register />} />
      </Route>
    </Routes>
  );
};

export default GuestRoutes;
