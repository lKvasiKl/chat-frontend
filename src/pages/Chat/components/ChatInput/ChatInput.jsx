import { useState, useRef } from "react";
import { SendButtonIcon } from "../../../../assets/images";
import { createMessage } from "../../../../helpers/message";

import styles from "./ChatInput.module.scss";

const ChatInput = ({ onSendMessage }) => {
  const [messageValue, setMessageValue] = useState("");
  const inputRef = useRef(null);

  const sendMessageHandler = () => {
    onSendMessage(createMessage(messageValue));
    setMessageValue("");
    inputRef.current?.focus();
  };

  const inputChangeHandler = (event) => {
    setMessageValue(event.target.value);
  };

  const sendButtonClickHandler = () => {
    sendMessageHandler(messageValue);
  };

  const enterDownHandler = (event) => {
    event.key === "Enter" && sendMessageHandler(messageValue);
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.input}
        placeholder="Send a message"
        value={messageValue}
        ref={inputRef}
        onChange={inputChangeHandler}
        onKeyDown={enterDownHandler}
      ></input>
      <button className={styles.sendButton} onClick={sendButtonClickHandler}>
        <SendButtonIcon />
      </button>
    </div>
  );
};

export default ChatInput;
