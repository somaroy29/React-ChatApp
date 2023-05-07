import React, { useContext, useEffect, useState } from "react";
import Add from "../img/john.jpg";

import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
const Chats = () => {
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
      <div className="userchat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p> Hello </p>
        </div>
      </div>
    </div>
  );
};
export default Chats;
