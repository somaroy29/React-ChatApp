import React from "react";
import { Sidebar } from "../Components/sidebar";
import { Chats } from "../Components/chats";

const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Sidebar />
        <Chats />
      </div>
    </div>
  );
};

export default Home;
