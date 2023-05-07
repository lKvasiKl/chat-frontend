import { Navigate, Route, Routes } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE, CHAT_ROUTE} from "../constants/routePath";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AppContainer from "../layouts/AppConatiner/AppContainer";
import GuestRoute from "../providers/auth/GuestRoute";
import RequireAuth from "../providers/auth/RequireAuth";
import Chat from "../pages/Chat/Chat";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AppContainer />}>
        <Route
          path="/"
          element={<Navigate to={LOGIN_ROUTE} replace={true} />}
        />
        <Route
          path={LOGIN_ROUTE}
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path={REGISTER_ROUTE}
          element={
            <GuestRoute>
              <Register />
            </GuestRoute>
          }
        />
        <Route element={<RequireAuth />}>
          <Route path={CHAT_ROUTE} element={<Chat />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
