import classNames from "classnames";

import styles from "./Message.module.scss";

const MESSAGE_TYPE_STYLES = {
  primary: styles.primary,
  secondary: styles.secondary,
};

const MESSAGE_POSITION_STYLES = {
  right: styles.right,
  left: styles.left,
};

const Message = ({ author, text, date, type = "primary", position = "right" }) => {
  const messageContainerClassNames = classNames(
    styles.messageContainer,
    MESSAGE_POSITION_STYLES[position]
  );
  
  const messageClassNames = classNames(
    styles.message,
    MESSAGE_TYPE_STYLES[type]
  );

  const formattedTime = new Date(date).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className={messageContainerClassNames}>
      <div className={messageClassNames}>
        {author && <span className={styles.author}>{author}</span>}
        <span>{text}</span>
      </div>
      <span className={styles.date}>{formattedTime}</span>
    </div>
  );
};

export default Message;
