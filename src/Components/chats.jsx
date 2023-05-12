import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
export const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "usersChat", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(chats);
  return (
    <div className="chats">
      {chats.length > 0 &&
        Object.entries(chats)?.map((chat) => (
          <div className="userchat" key={chat[0]}>
            <img src={chat[1].userInfo.photoURL} alt="" />
            <div className="userChatInfo">
              <span>{chat[1].userInfo.displayName}</span>
              <p> {chat[1].userInfo.lastMessage?.text}</p>
            </div>
          </div>
        ))}
      ;
    </div>
  );
};
export default Chats;
