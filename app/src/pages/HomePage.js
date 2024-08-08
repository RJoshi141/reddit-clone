import React, { useState, useEffect } from 'react';
import Post from '../components/Post';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the server
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default HomePage;
