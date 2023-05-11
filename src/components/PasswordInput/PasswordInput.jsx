import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import Input from "../Input/Input";

import styles from "./PasswordInput.module.scss";

const PasswordPostfix = ({ isVisible, onClick }) => {
  return (
    <span onClick={onClick} className={styles.eyeIcon}>
      {isVisible ? <BsEye /> : <BsEyeSlash />}
    </span>
  );
};

const PasswordInput = ({ label, onChange }) => {
  const [isVisible, setPasswordVisible] = useState(false);

  const handleEyeIconClick = (event) => {
    event.stopPropagation();

    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className={styles.inputPasswordWrapper}>
      <Input
        type={isVisible ? "text" : "password"}
        name="password"
        label={label}
        onChange={onChange}
      />
      <PasswordPostfix isVisible={isVisible} onClick={handleEyeIconClick} />
    </div>
  );
};

export default PasswordInput;
