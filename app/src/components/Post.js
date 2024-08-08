import React from 'react';

function Post({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Add upvote and comment functionality */}
    </div>
  );
}

export default Post;
