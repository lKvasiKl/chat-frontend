import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

import styles from "./Login.module.scss";

const Login = ({ chatName }) => {
  return (
    <div className={styles.loginPage}>
      <Header chatName={chatName} />
      <Form 
        children="Login"
        text="Don't have an account?"
        link="Register"
      />
    </div>
  );
};

export default Login;
