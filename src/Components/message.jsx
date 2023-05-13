import React, { useRef, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import userEvent from "@testing-library/user-event";

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <div
      ref={ref}
      className={`message ${message?.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : userEvent.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message?.text}</p>
        {message?.img && <img src={message?.img} alt="" />}
      </div>
    </div>
  );
};
export default Message;
