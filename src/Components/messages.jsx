import React, { useEffect, useState, useContext } from "react";
import Message from "./message";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    console.log(data);
    const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
      console.log(doc.data());
    });

    return () => {
      unsub();
    };
  }, [data.chatId]);
  
  return (
    <div className="messages">
      {messages?.map((m) => (
        <Message message={m} key={m.id} />
      ))}
      {/* <Message />
      <Message />
      <Message />
      <Message /> */}
    </div>
  );
};

export default Messages;
