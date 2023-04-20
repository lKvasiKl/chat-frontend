import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

import styles from "./Form.module.scss";

const Form = ({ children, text, link }) => {
  return (
    <form className={styles.form}>
      <Input type="text" name="login" label="Login" />
      <PasswordInput label="Password" />
      <Button>{children}</Button>
      <div className={styles.linkWrapper}>
        <span>{text}</span>
        {/*label заменить на <Link to={route}*/}
        <label className={styles.link}>{link}</label>
      </div>
    </form>
  );
};

export default Form;
