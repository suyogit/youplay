import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generateRandomName, generateRandomString } from "../utils/helper";


const LiveChat = () => {
  const [liveMessages, setLiveMessages] = useState([]); 
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
    <>    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">

      {
        chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </div>

      <form className="w-full p-2 ml-2 border border-black"

        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Suyog Acharya",
              message: liveMessages,
            })
          )
          setLiveMessages("")
        }
        }

      >
        <input
          className=" px-2 w-80"
          type="text"

          value={liveMessages}
          onChange={(e) => setLiveMessages(e.target.value)}
          placeholder="Enter your message..."
        />
        <button className="bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-2  mx-2 rounded">
          Send
        </button>

      </form>


    </>

  );
};

export default LiveChat;
