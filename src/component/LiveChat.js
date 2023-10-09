import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, generateRandomString } from "../utils/helper";


const LiveChat = () => {
  const chatMessages = useSelector((store) => store.chat.messages);

  const dispatch = useDispatch();


  useEffect(() => {
    const i = setInterval(() => {

      //API polling
      //  console.log("This will run after 2 second!");

      dispatch(
        addMessage({

          //take this from the API response but for now hardcode it 

          name: generateRandomName(),
          message: generateRandomString(15),
        })
      )


    }, 2000);
    return () => clearInterval(i);
  }
    , [])


  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">

      {
        chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>
  );
};

export default LiveChat;
