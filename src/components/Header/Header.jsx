import style from "./Header.module.scss";

const Header = ({ chatName }) => {
  return (
    <div className={style.header}>
      <span className={style.text}>{chatName}</span>
    </div>
  );
};

export default Header;