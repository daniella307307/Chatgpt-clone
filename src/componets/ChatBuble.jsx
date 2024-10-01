import React, { useState } from 'react';
import './Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faPaperclip } from '@fortawesome/free-solid-svg-icons';

function ChatBuble({onSendMessage}) {
  const [message, setMessage] = useState('');
  const handleSendMessage =()=>{
    if(message.trim()){
      onSendMessage(message)
      setMessage('');
    }
  }
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      // Insert a new line
      setMessage((prev) => prev + '\n');
      e.preventDefault(); // Prevent the default action
    }
  };
  const handleKeyPress= (e)=>{
    if(e.key === 'Enter'){
      handleSendMessage();
    }
  }
  return (
   <div>
     <div className='chat-container'>
      <div className='chat-bubble bg-transparent h-[3.5em] text-center flex items-center justify-between rounded-full border-white border-[2px] w-[65vh] px-4'>
        <FontAwesomeIcon icon={faPaperclip} className='text-white text-2xl'/>
        <input 
          type='text' 
          className='w-full mx-3 p-2 bg-transparent outline-none text-white' 
          placeholder='Message ChatGPT'
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <FontAwesomeIcon icon={faArrowCircleUp} className='text-white text-2xl'  onClick={handleSendMessage}/>
      </div>
    </div>
    <div className='bottom-0 disclaimer ml-[-6em] mb-[-1.5em]'>
        <span className='text-gray-400 text-[.7em] text-center'>ChatGPT can make mistakes. Check important Information</span>
      </div>
   </div>
  );
}

export default ChatBuble;
