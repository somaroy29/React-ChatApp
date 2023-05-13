import React, { useEffect, useState, useContext } from "react";
import Message from "./message";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data());
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);
  console.log(messages);
  return (
    <div className="messages">
      {messages?.map((m) => (
        <Message message={m} />
      ))}
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
