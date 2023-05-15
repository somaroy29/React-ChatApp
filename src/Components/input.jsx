import React from "react";
import Pin from "../img/pin.png";
import Img from "../img/img.png";
import { useState, useContext } from "react";
import {
  updateDoc,
  doc,
  arrayUnion,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);
  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);

  const handleSend = async () => {
    console.log(currentUser, data);
    try {
      if (img) {
        const storageRef = ref(storage, uuid());
        const uploadTask = uploadBytesResumable(storageRef, img);
        
        uploadTask.on(
          (error) => {
            //TODO:Handle Error
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
              await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                  id: uuid(),
                  text,
                  senderId: currentUser.uid,
                  date: Timestamp.now(),
                  img: downloadURL,
                }),
              });
            });
          }
        );
      } else {
        const updateDocRef = doc(db, "chats", data.chatId);
        await updateDoc(updateDocRef, {
          Messages: arrayUnion({
            id: uuid(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }
      const updateChatsRef = doc(db, "userChats", currentUser.uid);
      await updateDoc(updateChatsRef, {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      const updateChatsRefUser = doc(db, "userChats", data.user.uid);
      await updateDoc(updateChatsRefUser, {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      setText("");
      setImg(null);
    } catch (ex) {
      console.log(ex);
    }
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type your Text.."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={Pin} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files)}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};
export default Input;
