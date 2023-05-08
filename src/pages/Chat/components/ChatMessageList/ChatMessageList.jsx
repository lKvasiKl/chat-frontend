import { useState, useEffect } from "react";
import { getMessages } from "../../../../services/messageService";
import ChatMessage from "../ChatMessage/ChatMessage";
import InfiniteScroll from "react-infinite-scroll-component";

import styles from "./ChatMessageList.module.scss";

const MESSAGE_AMOUNT = 25;

const ChatMessageList = ({ messageList, setMessageList }) => {
  const [hasMore, setHasMore] = useState(true);

  const fetchPrevMessages = async () => {
    const before = messageList[0]?.sentAt || new Date().toISOString();

    const { messages } = await getMessages(before, MESSAGE_AMOUNT);

    if (messages.length < MESSAGE_AMOUNT) {
      setHasMore(false);
    }

    setMessageList(
      [...messages, ...messageList].sort((firstMessage, secondMessage) => {
        return new Date(firstMessage.sentAt) > new Date(secondMessage.sentAt)
          ? 1
          : -1;
      })
    );
  };

  useEffect(() => {
    fetchPrevMessages();
  }, []);

  return (
    <div id="infinite-scroll" className={styles.messageListContainer}>
      <InfiniteScroll
        className={styles.messageList}
        inverse={true}
        dataLength={messageList.length}
        next={fetchPrevMessages}
        hasMore={hasMore}
        scrollableTarget={"infinite-scroll"}
      >
        {messageList.map((messageContent) => {
          return (
            <ChatMessage
              key={messageContent.id}
              messageData={messageContent}
            />
          );
        })}
      </InfiniteScroll>
    </div>
  );
};

export default ChatMessageList;
