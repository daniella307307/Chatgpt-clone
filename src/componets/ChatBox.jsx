import {
  faChevronDown,
  faShare,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import profile from "./profile.jpeg";

function ChatBox() {
  return (
    <div>
      <div className="ml-4 mt-2">
        <div className="float-left">
          <span className="text-[1.2em] text-gray-300 font-semibold mr-1 w-[8em] h-[2em] p-2">
            ChatGPT Auto{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="text-[.7em] font-light"
            />
          </span>
        </div>
        <div className="flex space-x-4 float-right mr-[1em] p-2">
          <div className="border-[1px] p-2 w-[6em] text-center rounded-[2em]">
            <FontAwesomeIcon icon={faUpload} className="mr-2" />
            <span>Share</span>
          </div>
          <div>
            <img
              src={profile}
              alt=""
              className="w-[3em] h-[3em] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
