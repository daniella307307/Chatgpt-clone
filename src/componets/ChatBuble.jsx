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
  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message)
      console.log(message); 
      setMessage(''); 
    }
  };
  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
       
      e.preventDefault();
    } else if (e.key === 'Enter') {
     
      handleSend();
      e.preventDefault(); 
    }
  };
  return (
   <div>
     <div className='chat-container'>
      <div className='chat-bubble bg-transparent h-[3.5em] text-center flex items-center justify-between rounded-full border-white border-[2px] w-[65vh] px-4'>
        <FontAwesomeIcon icon={faPaperclip} className='text-white text-2xl'/>
        <input
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyDown} // Attach the keydown event handler
          className='w-full mx-3 p-2 bg-transparent outline-none resize-none'
          placeholder='Message ChatGPT'
          rows={1} // Control initial visible rows
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
