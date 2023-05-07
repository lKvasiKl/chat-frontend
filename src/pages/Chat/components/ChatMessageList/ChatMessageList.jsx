import ScrollToBottom from "react-scroll-to-bottom";
import ChatMessage from "../ChatMessage/ChatMessage";

import styles from "./ChatMessageList.module.scss";

const ChatMessageList = ({ messageList }) => {
  return (
    <ScrollToBottom className={styles.messageListContainer}>
      <div className={styles.messageList}>
        {messageList.map((messageContentn) => {
          return (
            <ChatMessage
              key={messageContentn.id}
              messageData={messageContentn}
            />
          );
        })}
      </div>
    </ScrollToBottom>
  );
};

export default ChatMessageList;
