import React, { useState } from 'react';
import Post from './Post';
import PostForm from './PostForm';
import './Subreddit.css';

function Subreddit() {
  const [posts, setPosts] = useState([
    {
      title: 'Welcome to Our Reddit Clone!',
      content: 'Dive into a world where you can post, upvote, and interact just like on the real Reddit. This clone is powered by React, and it’s designed with all the classic features you love, but with a twist of creativity!',
      author: 'Admin',
      date: new Date(Date.now() - 3 * 7 * 24 * 60 * 60 * 1000), // 3 weeks ago
    },
    {
      title: 'Explore the Features!',
      content: 'In this clone, you can create posts, comment, and interact with others. It’s a great playground for developers and users alike to experience the magic of Reddit with a fresh UI and some cool surprises!',
      author: 'Admin',
      date: new Date(Date.now() - 2 * 365 * 24 * 60 * 60 * 1000), // 2 years ago
    },
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
