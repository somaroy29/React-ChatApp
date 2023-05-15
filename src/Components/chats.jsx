import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

export const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);
  useEffect(() => {
    console.log("insisde useEffect");
    const getChats = async () => {
      const unsub = await onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc) => {
          // console.log(doc.data(), currentUser.uid);
          setChats(doc.data());
        }
      );
      // const docRef = doc(db, "usersChat", "test");
      // await setDoc(docRef, {
      //   name: "San Francisco", state: "CA", country: "USA",
      //   capital: false, population: 860000,
      //   regions: ["west_coast", "norcal"]});

      // const docRef_ = doc(db, "usersChat", "test");
      // const res = await getDoc(docRef_);
      // console.log(res.data());

      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats();
  }, []);

  const handleSelect = (u) => {
    console.log("selelcted this user", u);
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  console.log(chats, currentUser.uid);

  return (
    <div className="chats">
      {chats && Object.keys(chats).length !== 0 ? (
        Object.entries(chats)
          ?.sort((a, b) => b[1].date - a[1].date)
          .map((chat) => (
            <div
              className="userchat"
              key={chat[0]}
              onClick={(e) => handleSelect(chat[1].userInfo)}
            >
              <img src={chat[1].userInfo.photoURL} alt="" />
              <div className="userChatInfo">
                <span>{chat[1].userInfo.displayName}</span>
                <p> {chat[1].lastMessage?.text}</p>
              </div>
            </div>
          ))
      ) : (
        <p></p>
      )}
      {/* <Chat></Chat> */}
    </div>
  );
};
export default Chats;
