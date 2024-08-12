import React, { useState } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import './Subreddit.css';

function Subreddit() {
  const [posts, setPosts] = useState([
    { title: 'First Post', content: 'This is the first post.', author: 'User1', date: '2024-08-11T10:00:00Z' },
    { title: 'Second Post', content: 'This is the second post.', author: 'User2', date: '2024-08-11T12:00:00Z' },
  ]);

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="subreddit">
      <h1>Subreddit Timeline</h1>
      <PostForm onSubmit={addPost} />
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          content={post.content}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default Subreddit;
