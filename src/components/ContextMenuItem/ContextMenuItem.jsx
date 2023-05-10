import styles from "./ContextMenu.module.scss";

const ContextMenuItem = ({ children, icon, onClick }) => {
  return (
    <li className={styles.menuItem}>
      <button className={styles.button} onClick={onClick}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </button>
    </li>
  );
};

export default ContextMenuItem;
