import React, { useState } from 'react';
import './Post.css';

function Post({ title, content, author, date }) {
  const [upvotes, setUpvotes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, date: new Date().toISOString() }]);
      setCommentText('');
    }
  };

  return (
    <div className="post">
      <div className="upvote-section">
        <button onClick={handleUpvote} className="upvote-button">↑</button>
        <div className="upvotes">{upvotes}</div>
      </div>
      <div className="post-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <small>Posted by {author} on {new Date(date).toLocaleString()}</small>
        <div className="comments">
          <h3>Comments</h3>
          {comments.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment.text}</p>
              <small>Commented on {new Date(comment.date).toLocaleString()}</small>
            </div>
          ))}
        </div>
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Post;
