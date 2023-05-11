import { SendButtonIcon } from "../../../../assets/images";

import styles from "./ChatInput.module.scss";

const ChatInput = ({
  inputRef,
  messageText,
  setMessageText,
  isMessageEditing,
  setIsEditing,
  onSendMessage,
  onEditMessage,
}) => {
  const handleSendMessage = () => {
    if (messageText === "") {
      setIsEditing(false);

      return;
    }

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
