import { useRef } from "react";

import styles from "./Input.module.scss";

const Input = ({ type, label, onChange }) => {
  const inputRef = useRef(null);

  return (
    <div className={styles.inputFieldWrapper}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        ref={inputRef}
        type={type}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
