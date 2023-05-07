import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CHAT_ROUTE } from "../../constants/routePath";
import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

import styles from "./Form.module.scss";

const Form = ({ children, onSubmit }) => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChangeForm = ({ name, value }) => {
    setForm({ ...form, [name]: value });
  };

  const handleForm = async (event) => {
    event.preventDefault();

    try {
      await onSubmit(form);
      navigate(CHAT_ROUTE);
    } catch (error) {
      throw error;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleForm}>
      <Input
        type="text"
        name="nickname"
        label="Login"
        onChange={handleChangeForm}
      />
      <PasswordInput label="Password" onChange={handleChangeForm} />
      <Button>{children}</Button>
    </form>
  );
};

export default Form;
