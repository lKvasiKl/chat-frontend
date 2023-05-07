import { useRef } from "react";

import styles from "./Input.module.scss";

const Input = ({ type, name, label, onChange }) => {
  const inputRef = useRef(null);

  const handleChange = (event) => {
    const value = event.target.value;
    onChange({ name, value });
  };

  return (
    <div className={styles.inputFieldWrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        ref={inputRef}
        type={type}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
