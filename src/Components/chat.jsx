import React from "react";
import Add from "../img/add.jpg";
import Video from "../img/video.png";
import Dots from "../img/dots.jpg";
import Search from "../img/s.jpg";
import Messages from "./messages";
import Input from "./input";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
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
