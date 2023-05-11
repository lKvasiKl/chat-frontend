import { forwardRef } from "react";

import styles from "./ContextMenu.module.scss";

// forwardRef - функция высшего порядка, которая позволяет передавать ref через компонент, чтобы он был доступен для взаимодействия с вложенным дочерним элементом.
// Корректно позиционируем контекстное меню на странице, ref - ссылка на DOM элемент
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
