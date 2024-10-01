import React, { useState } from "react";
import { faChevronDown, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "./profile.jpeg";
import ChatBuble from "./ChatBuble";
import Chat from "./Chat";

function ChatBox() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chatbox-container p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center w-full">
        <div className="text-gray-300 font-semibold">
          <span className="text-[1.2em] mr-1">ChatGPT Auto</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[0.7em] font-light"
          />
        </div>

        {/* Right Side: Share button and Profile */}
        <div className="flex items-center space-x-4">
          <div className="border p-2 text-center rounded-full flex items-center justify-center">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            <span>Share</span>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile"
              className="w-[3em] h-[3em] rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Chat Component to display messages */}
      <Chat messages={messages} />
      {/* Chat Bubble for input */}
      <div>
        <ChatBuble onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default ChatBox;
