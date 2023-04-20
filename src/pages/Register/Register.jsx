import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";

import styles from "./Register.module.scss";

const Register = ({ chatName }) => {
  return (
    <div className={styles.registerPage}>
      <Header chatName={chatName} />
      <Form 
        children="Register"
        text="Already have an account?"
        link="Login"
      />
    </div>
  );
};

export default Register;
