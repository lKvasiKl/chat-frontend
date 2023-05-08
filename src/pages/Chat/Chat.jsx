import { useState } from "react";
import { Stomp } from "@stomp/stompjs";
import { getSessionFromStorage } from "../../helpers/tokens";
import {
  SERVER_URL,
  RECEIVE_MESSAGE,
  SEND_MESSAGE,
} from "../../constants/serverPath";
import ChatMessageList from "./components/ChatMessageList/ChatMessageList";
import SockJS from "sockjs-client";

import ChatInput from "./components/ChatInput/ChatInput";

const sockJS = new SockJS(`${SERVER_URL}/sockjs`);
const stompClient = Stomp.over(sockJS);

const Chat = () => {
  const [messageList, setMessageList] = useState([]);

  const onConnected = () => {
    stompClient.subscribe(RECEIVE_MESSAGE, (data) => {
      setMessageList((list) => [...list, JSON.parse(data.body)]);
    });
  };

  stompClient.connect(
    {
      Authorization: `Bearer ${getSessionFromStorage("accessToken")}`,
    },
    onConnected
  );

  const sendMessageHandler = (messageValue) => {
    if (messageValue !== "") {
      stompClient.send(SEND_MESSAGE, {}, JSON.stringify(messageValue));
    }
  };

  return (
    <>
      <ChatMessageList messageList={messageList} />
      <ChatInput onSendMessage={sendMessageHandler} />
    </>
  );
};

export default Chat;
