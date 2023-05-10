import { useEffect, useState, useRef } from "react";
import { Stomp } from "@stomp/stompjs";
import { getSessionFromStorage } from "../../helpers/tokens";
import {
  createMessage,
  editMessage,
  deleteMessage,
} from "../../helpers/message";
import {
  SERVER_URL,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
  EDITED_MESSAGE_DESTINATION,
  EDIT_MESSAGE,
  DELETED_MESSAGE_DESTINATION,
  DELETE_MESSAGE,
} from "../../constants/serverPath";
import ChatMessageList from "./components/ChatMessageList/ChatMessageList";
import SockJS from "sockjs-client";
import ChatInput from "./components/ChatInput/ChatInput";

let sockJS;
let stompClient;

const Chat = () => {
  const [messageList, setMessageList] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef(null);

  const onConnected = () => {
    stompClient.subscribe(RECEIVE_MESSAGE, (data) => {
      setMessageList((list) => [...list, JSON.parse(data.body)]);
    });

    stompClient.subscribe(EDITED_MESSAGE_DESTINATION, (data) => {
      const editedMessage = JSON.parse(data.body);

      setMessageList((list) => {
        list[list.findIndex((message) => message.id === editedMessage.id)] =
          editedMessage;

          return [...list];
      });
    });

    stompClient.subscribe(DELETED_MESSAGE_DESTINATION, (data) => {
      const deletedMessage = JSON.parse(data.body);

      setMessageList((list) =>
        list.filter((message) => message.id !== deletedMessage.id)
      );
    });
  };

  useEffect(() => {
    sockJS = new SockJS(`${SERVER_URL}/sockjs`);
    stompClient = Stomp.over(() => {
      return sockJS;
    });

    stompClient.connect(
      {
        Authorization: `Bearer ${getSessionFromStorage("accessToken")}`,
      },
      onConnected
    );

    return () => {
      stompClient.disconnect();
    };
  }, []);

  const sendMessage = (messageText) => {
    stompClient.send(
      SEND_MESSAGE,
      {},
      JSON.stringify(createMessage(messageText))
    );
  };

  const sendEditMessage = (messageId, messageText) => {
    stompClient.send(
      EDIT_MESSAGE,
      {},
      JSON.stringify(editMessage(messageId, messageText))
    );
  };

  const onStartEditMessage = () => {
    setIsEditing(true);

    const messageId = selectedMessage.getAttribute("data-message-id");
    const messageText = messageList.find(
      (message) => message.id === messageId
    ).content;

    setMessageText(messageText);
    inputRef.current?.focus();
  };

  const onEndEditMessage = (messageText) => {
    const messageId = selectedMessage.getAttribute("data-message-id");

    sendEditMessage(messageId, messageText);

    setIsEditing(false);
    setSelectedMessage(null);
  };

  const sendDeleteMessage = (messageId) => {
    stompClient.send(
      DELETE_MESSAGE,
      {},
      JSON.stringify(deleteMessage(messageId))
    );
  };

  const onDeleteMessage = () => {
    const messageId = selectedMessage.getAttribute("data-message-id");

    sendDeleteMessage(messageId);
  };

  return (
    <>
      <ChatMessageList
        messageList={messageList}
        setSelectedMessage={setSelectedMessage}
        setMessageList={setMessageList}
        onDeleteMessage={onDeleteMessage}
        onEditMessage={onStartEditMessage}
      />
      <ChatInput
        inputRef={inputRef}
        messageText={messageText}
        setMessageText={setMessageText}
        isMessageEditing={isEditing}
        onSendMessage={sendMessage}
        onEditMessage={onEndEditMessage}
      />
    </>
  );
};

export default Chat;
