import React from 'react';
import './App.css';
import Subreddit from './components/Subreddit';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const user = {
    name: 'User1',
    subscribedSubreddits: ['reactjs', 'webdev', 'programming'],
    upvotedPosts: [
      { title: 'First Post', upvotes: 5 },
      { title: 'Second Post', upvotes: 3 },
    ],
  };

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar user={user} />
        <div className="main-content">
          <Subreddit />
          <UserProfile user={user} />
        </div>
      </div>
    </div>
  );
}

export default App;
