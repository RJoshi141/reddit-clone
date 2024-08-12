// src/components/MessageList.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MessageList.css';

const MessageList = ({ conversations }) => {
  return (
    <div className="message-list">
      <h2>Messages</h2>
      <ul>
        {conversations.map((conversation, index) => (
          <li key={index}>
            <Link to={`/messages/${conversation.id}`}>
              <div className="message-item">
                <strong>{conversation.with}</strong>
                <p>{conversation.latestMessage}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
