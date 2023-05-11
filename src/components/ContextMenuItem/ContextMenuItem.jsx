import styles from "./ContextMenu.module.scss";

const ContextMenuItem = ({ children, onClick }) => {
  return (
    <li className={styles.menuItem}>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default ContextMenuItem;
