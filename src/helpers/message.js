const createMessage = (messageText) => {
  return {
    content: messageText,
  };
};

const deleteMessage = (messageId) => {
  return {
    messageId: messageId,
  };
};

const editMessage = (messageId, messageText) => {
  return {
    messageId: messageId,
    content: messageText,
  };
};

export { createMessage, deleteMessage, editMessage };
