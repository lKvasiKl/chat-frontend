import { useState, useEffect, useRef } from "react";
import { getMessages } from "../../../../services/messageService";
import { getContextMenuPosition } from "../../../../components/ContextMenu/helpers/getContextMenuPosition";
import ChatMessage from "../ChatMessage/ChatMessage";
import InfiniteScroll from "react-infinite-scroll-component";
import ContextMenu from "../../../../components/ContextMenu/ContextMenu";
import ContextMenuItem from "../../../../components/ContextMenuItem/ContextMenuItem";

import styles from "./ChatMessageList.module.scss";

const MESSAGE_AMOUNT = 25;

const ChatMessageList = ({
  setSelectedMessage,
  messageList,
  setMessageList,
  onDeleteMessage,
  onEditMessage,
}) => {
  const [hasMore, setHasMore] = useState(true);
  const [contextMenuPosition, setContextMenuPosition] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const contextMenuRef = useRef(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setIsOpen(true);
    setSelectedMessage(event.currentTarget);
    setContextMenuPosition(
      getContextMenuPosition(event, { vertical: "top", horizontal: "left" })
    );
  };

  const handleClickOutside = (event) => {
    if (isOpen && !event.target.contains(contextMenuRef.current)) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    if (isOpen) {
      setIsOpen(false);
      setSelectedMessage(null);
    }
  };

  const handleEditMessageClick = () => {
    onEditMessage();
  };

  const handleDeleteMessageClick = () => {
    onDeleteMessage();
  };

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

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      id="infinite-scroll"
      className={styles.messageListContainer}
      onScroll={handleScroll}
    >
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
              onContextMenu={handleContextMenu}
            />
          );
        })}
      </InfiniteScroll>
      <ContextMenu
        anchor={contextMenuPosition}
        isOpen={isOpen}
        ref={contextMenuRef}
      >
        <ContextMenuItem onClick={handleEditMessageClick}>Edit</ContextMenuItem>
        <ContextMenuItem onClick={handleDeleteMessageClick}>
          Delete
        </ContextMenuItem>
      </ContextMenu>
    </div>
  );
};

export default ChatMessageList;
