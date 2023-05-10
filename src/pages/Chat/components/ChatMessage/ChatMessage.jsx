import { getCurrentUserId } from "../../../../helpers/user";
import Message from "../../../../components/Message/Message";

const ChatMessage = ({ messageData, onContextMenu }) => {
  const isCurrentUserMessage = messageData.authorId === getCurrentUserId();

  return isCurrentUserMessage ? (
    <Message
      messageId={messageData.id}
      text={messageData.content}
      date={messageData.sentAt}
      onContextMenu={onContextMenu}
    />
  ) : (
    <Message
      type="secondary"
      position="left"
      author={messageData.authorNickname}
      messageId={messageData.id}
      text={messageData.content}
      date={messageData.sentAt}
    />
  );
};

export default ChatMessage;
