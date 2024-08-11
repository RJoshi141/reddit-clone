import React, { useState } from 'react';
import './Comment.css';

function Comment({ text, date }) {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  return (
    <div className="comment">
      <div className="comment-header">
        <button onClick={handleUpvote} className="upvote-button">↑</button>
        <span className="upvotes">{upvotes}</span>
      </div>
      <p>{text}</p>
      <small>Commented on {new Date(date).toLocaleString()}</small>
    </div>
  );
}

export default Comment;
