import { useState } from "react";
import ChatMessageList from "./components/ChatMessageList/ChatMessageList";

import ChatInput from "./components/ChatInput/ChatInput";

// const messages = [
//   {
//     id: "ec47387d-5913-443c-bbe5-e92f3483b524",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "EDITED MESSAGE",
//     edited: true,
//     sentAt: "2023-05-07T19:47:59.213962Z",
//   },
//   {
//     id: "9efc656d-1277-42fa-8ff0-c89d759b2697",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "49",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.212472Z",
//   },
//   {
//     id: "d1e6d65b-6f8e-496e-b2f6-1ec8d63dde85",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa31",
//     authorNickname: "Keeper",
//     content: "DNSDKSLLKDSNDM<S SDKJSD SDK S",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.211940Z",
//   },
//   {
//     id: "7bd380b6-f082-4027-b732-0461f539a1f0",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "47",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.210315Z",
//   },
//   {
//     id: "fcf172f6-ca10-49a1-aad4-4394d0e60c68",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "46",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.209537Z",
//   },
//   {
//     id: "8d6f0868-4d29-40df-9b4a-9b742bb7f6e6",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "45",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.209537Z",
//   },
//   {
//     id: "69506b3a-5421-4e34-98c2-1a34ba77ddcb",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "JHdfjlksf dnjssdfns  sjfndfso a duif saf f shjj sdffs",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.208560Z",
//   },
//   {
//     id: "be32afa8-47a4-4ca6-8c49-fc90a6526af0",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "43",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.207321Z",
//   },
//   {
//     id: "dcf3c644-2c64-465e-80a2-9dcebe1b4769",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa310",
//     authorNickname: "Jak",
//     content: "Jfjksj dsdifnsh jdfifonf dsjfisj fl sfd",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.204332Z",
//   },

//   {
//     id: "dcf3c644-2c64-465e-81a2-9dcebe1b4769",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa310",
//     authorNickname: "Jak",
//     content: "Jfjksj dsdifnsh jdfifonf dsjfisj fl sfd",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.204332Z",
//   },

//   {
//     id: "dcf3c644-2c64-465e-83a2-9dcebe1b4769",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa310",
//     authorNickname: "Jak",
//     content: "Jfjksj dsdifnsh jdfifonf dsjfisj fl sfd",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.204332Z",
//   },

//   {
//     id: "dcf3c644-2c64-465e-90a2-9dcebe1b4769",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa310",
//     authorNickname: "Jak",
//     content: "Jfjksj dsdifnsh jdfifonf dsjfisj fl sfd",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.204332Z",
//   },
//   {
//     id: "b6da9827-ad04-4a2f-9cbe-fb2aa22b5316",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "40",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.203419Z",
//   },
//   {
//     id: "b6da9827-ad04-4a2f-9cbe-fb2aa22b5316",
//     authorId: "dd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "LKklfsk dkkl dkfds sdds kkl",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.203419Z",
//   },
//   {
//     id: "b6da9827-ah04-4a2f-9cbe-fb2aa22b5316",
//     authorId: "fd6df17a-d4e0-4d3b-8440-75776fd3aa30",
//     authorNickname: "Keeper",
//     content: "fdksldlksd",
//     edited: false,
//     sentAt: "2023-05-07T16:47:59.203419Z",
//   },
// ];

const Chat = () => {
  const [messageList, setMessageList] = useState([]);

  const sendMessageHandler = () => {};

  return (
    <>
      <ChatMessageList messageList={messageList} />
      <ChatInput onSendMessage={sendMessageHandler} />
    </>
  );
};

export default Chat;
