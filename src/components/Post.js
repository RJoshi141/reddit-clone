import React, { useState } from 'react';
import './Post.css';
import Comment from './Comment';

function Post({ title, content, author, date }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [upvotes, setUpvotes] = useState(0);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, date: new Date().toISOString() }]);
      setCommentText('');
    }
  };

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleCancel = () => {
    setCommentText('');
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="upvote-section">
          <button onClick={handleUpvote} className="upvote-button">↑</button>
          <div className="upvotes">{upvotes}</div>
        </div>
        <div className="post-title">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="post-content">
        <p>{content}</p>
        <small>Posted by {author} on {new Date(date).toLocaleString()}</small>
        <div className="comments">
          <h3>Comments</h3>
          {comments.map((comment, index) => (
            <Comment key={index} {...comment} />
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="comment-button">Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
