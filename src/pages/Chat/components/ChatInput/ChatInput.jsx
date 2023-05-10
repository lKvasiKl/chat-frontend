import { SendButtonIcon } from "../../../../assets/images";
import { createMessage, editMessage } from "../../../../helpers/message";

import styles from "./ChatInput.module.scss";

const ChatInput = ({
  inputRef,
  messageText,
  setMessageText,
  isMessageEditing,
  onSendMessage,
  onEditMessage
}) => {

  const handleSendMessage = () => {
    if (isMessageEditing) {
      onEditMessage(messageText);
    } else {
      onSendMessage(messageText);
    }

    setMessageText("");
    inputRef.current?.focus();
  };

  const handleInputChange = (event) => {
    setMessageText(event.target.value);
  };

  const handleSendButtonClick = () => {
    handleSendMessage();
  };

  const handleEnterKeyDown = (event) => {
    event.key === "Enter" && handleSendMessage();
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Send a message"
        value={messageText}
        ref={inputRef}
        onChange={handleInputChange}
        onKeyDown={handleEnterKeyDown}
      ></input>
      <button className={styles.sendButton} onClick={handleSendButtonClick}>
        <SendButtonIcon />
      </button>
    </div>
  );
};

export default ChatInput;
