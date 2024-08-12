import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaCommentAlt, FaGift, FaShare } from 'react-icons/fa';
import './Post.css';

function Post({ title, content, author, date }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [upvotes, setUpvotes] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    const calculateRelativeTime = () => {
      const now = new Date();
      const diff = now - new Date(date);
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const years = Math.floor(days / 365);

      if (seconds < 60) {
        return `${seconds} sec ago`;
      } else if (minutes < 60) {
        return `${minutes} min ago`;
      } else if (hours < 24) {
        return `${hours} hr ago`;
      } else if (days < 7) {
        return `${days} d ago`;
      } else if (weeks < 52) {
        return `${weeks} w ago`;
      } else {
        return `${years} yr ago`;
      }
    };

    const updateRelativeTime = () => {
      setRelativeTime(calculateRelativeTime());
    };

    updateRelativeTime();
    const intervalId = setInterval(updateRelativeTime, 60000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [date]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([...comments, { text: commentText, date: new Date().toISOString() }]);
      setCommentText('');
      setShowCommentForm(false);
    }
  };

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleReplyClick = () => {
    setShowCommentForm(!showCommentForm);
  };

  const handleCancel = () => {
    setCommentText('');
    setShowCommentForm(false);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-logo">U</div>
        <div className="post-details">
          <div className="post-community-time">
            <span className="post-community">r/ReactClone</span>
            <span className="post-time">{relativeTime}</span>
          </div>
          <div className="post-author">{author}</div>
        </div>
      </div>
      <h2 className="post-title">{title}</h2>
      <p className="post-content">{content}</p>
      <div className="post-actions">
        <div className="upvote-section">
          <button onClick={handleUpvote} className="upvote-button">
            <FaArrowUp />
          </button>
          <div className="upvotes">{upvotes}</div>
        </div>
        <button onClick={handleReplyClick} className="reply-button">
          <FaCommentAlt /> Reply
        </button>
        <button className="award-button">
          <FaGift /> Badge
        </button>
        <button className="share-button">
          <FaShare /> Share
        </button>
      </div>
      {showCommentForm && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <input
            type="text"
            placeholder="Add a comment"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button type="submit" className="comment-button">Comment</button>
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </form>
      )}
    </div>
  );
}

export default Post;
