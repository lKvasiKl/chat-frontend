import { forwardRef } from "react";

import styles from "./ContextMenu.module.scss";

const ContextMenu = forwardRef(({ children, isOpen, anchor }, ref) => {
  return (
    isOpen && (
      <ul
        ref={ref}
        style={{ top: anchor.top, left: anchor.left }}
        className={styles.menuList}
      >
        {children}
      </ul>
    )
  );
});

export default ContextMenu;
