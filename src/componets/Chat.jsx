import React from "react";
import profile from "./profile.jpeg"; // Ensure the profile image path is correct
import "./Style.css";

function Chat({ messages }) {
  return (
    <div className="chat-log w-full p-4 flex flex-col">
      {messages.map((message, index) => (
        <div key={index} className="chat-message flex justify-end">
          <div className="message p-2 bg-gray-800 text-white rounded-md max-w-[70%]" id="message">
            {message}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Chat;
