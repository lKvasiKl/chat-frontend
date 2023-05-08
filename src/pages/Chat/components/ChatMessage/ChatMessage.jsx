import { getCurrentUserId } from "../../../../helpers/user";
import Message from "../../../../components/Message/Message";

const ChatMessage = ({ messageData }) => {
  const isCurrentUserMessage = messageData.authorId === getCurrentUserId();

  return isCurrentUserMessage ? (
    <Message text={messageData.content} date={messageData.sentAt} />
  ) : (
    <Message
      type="secondary"
      position="left"
      author={messageData.authorNickname}
      text={messageData.content}
      date={messageData.sentAt}
    />
  );
};

export default ChatMessage;
