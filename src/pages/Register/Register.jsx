import { Link } from "react-router-dom";
import { LOGIN_ROUTE } from "../../constants/routePath";
import { useAuth } from "../../hooks/useAuth";
import AuthContainer from "../../layouts/AuthContainer/AuthContainer";
import Form from "../../components/Form/Form";

import styles from "./Register.module.scss";

const linkToLogin = (
  <>
    Already have an account?
    <Link className={styles.link} to={LOGIN_ROUTE}>
      Login
    </Link>
  </>
);

const Register = () => {
  const { register } = useAuth();

  return (
    <AuthContainer link={linkToLogin}>
      <Form children="Register" onSubmit={register} />
    </AuthContainer>
  );
};

export default Register;
