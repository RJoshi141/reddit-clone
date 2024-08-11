import React from 'react';
import './Post.css';

function Post({ title, content, author, date }) {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{content}</p>
      <small>Posted by {author} on {new Date(date).toLocaleString()}</small>
    </div>
  );
}

export default Post;
