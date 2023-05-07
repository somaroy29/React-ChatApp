import React from "react";
import Pin from "../img/pin.png";
import Img from "../img/img.png";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type your Text.." />
      <div className="send">
        <img src={Pin} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};
export default Input;
