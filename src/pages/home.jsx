import React from "react";
import { Sidebar } from "../Components/sidebar";
import { Chat } from "../Components/chat";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
