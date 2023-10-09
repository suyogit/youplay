import React from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name={"Suyog Acharya"} message={"This is live chat WHooo!"} />
    </div>
  );
};

export default LiveChat;
