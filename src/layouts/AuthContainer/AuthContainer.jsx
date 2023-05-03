import styles from "./AuthContainer.module.scss";

const AuthContainer = ({ children, link }) => {
  return (
    <div className={styles.authContainer}>
      {children}
      <span className={styles.linkWrapper}>{link}</span>
    </div>
  );
};

export default AuthContainer;
