import Message from "../../../../components/Message/Message";

const ChatMessage = ({ messageData }) => {
  const isCurrentUserMessage = messageData.authorId === "dd6df17a-d4e0-4d3b-8440-75776fd3aa30"; //currentUserId;

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
