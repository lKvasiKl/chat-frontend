import { useAuth } from "../../hooks/useAuth";
import { LogoutButtonIcon } from "../../assets/images";

import styles from "./Header.module.scss";

const Header = ({ chatName }) => {
  const { isAuth, logout } = useAuth();

  return (
    <div className={styles.header}>
      <span className={styles.text}>{chatName}</span>
      {isAuth && (
        <button className={styles.logout} onClick={logout}>
          <LogoutButtonIcon />
        </button>
      )}
    </div>
  );
};

export default Header;
