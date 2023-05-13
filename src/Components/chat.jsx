import React, { useContext } from "react";
import Add from "../img/add.jpg";
import Video from "../img/video.png";
import Dots from "../img/dots.jpg";
import Search from "../img/s.jpg";
import Messages from "./messages";
import Input from "./input";
import { AuthContext } from "../context/AuthContext";

export const Chat = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{currentUser?.displayName}</span>
        <div className="chatIcons">
          <img src={Add} alt="" />
          <img src={Video} alt="" />
          <img src={Dots} alt="" />
          <img src={Search} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};
