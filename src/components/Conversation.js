// src/components/Conversation.js
import React, { useState } from 'react';
import './Conversation.css';

const Conversation = ({ match }) => {
  const [messageText, setMessageText] = useState('');
  const conversationId = match.params.id;

  // Sample data for messages
  const messages = [
    { id: 1, sender: 'User1', text: 'Hello!' },
    { id: 2, sender: 'User2', text: 'Hi, how are you?' },
  ];

  const handleSendMessage = () => {
    // Logic to send a message
    console.log('Message sent:', messageText);
    setMessageText('');
  };

  return (
    <div className="conversation">
      <h2>Conversation with User {conversationId}</h2>
      <div className="message-display">
        {messages.map((message) => (
          <div key={message.id} className={message.sender === 'User1' ? 'message-sent' : 'message-received'}>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Conversation;
