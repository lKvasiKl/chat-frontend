import { Link } from "react-router-dom";
import { REGISTER_ROUTE } from "../../constants/routePath";
import Form from "../../components/Form/Form";
import AuthContainer from "../../layouts/AuthContainer/AuthContainer";

import styles from ".//Login.module.scss";

const linkToRegister = (
  <>
    Don't have an account?
    <Link className={styles.link} to={REGISTER_ROUTE}>
      Register
    </Link>
  </>
);

const Login = () => {
  return (
    <AuthContainer link={linkToRegister}>
      <Form children="Login" />
    </AuthContainer>
  );
};

export default Login;
