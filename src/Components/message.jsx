import React from "react";
import julie from "../img/Julie.jpg";

export const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={julie} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <img src={julie} alt="" />
        <p>hello</p>
      </div>
    </div>
  );
};
export default Message;
