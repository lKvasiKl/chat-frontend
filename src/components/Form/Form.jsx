import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

import styles from "./Form.module.scss";

const Form = ({ children }) => {
  return (
    <form className={styles.form}>
      <Input type="text" name="login" label="Login" />
      <PasswordInput label="Password" />
      <Button>{children}</Button>
    </form>
  );
};

export default Form;
