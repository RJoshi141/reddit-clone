import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Subreddit from './components/Subreddit';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  const user = {
    name: 'User1',
    profilePicture: 'https://via.placeholder.com/100',
    bio: 'Just a regular Reddit user who loves cats and coding.',
    subscribedSubreddits: ['reactjs', 'webdev', 'programming'],
    upvotedPosts: [
      { title: 'First Post', upvotes: 5 },
      { title: 'Second Post', upvotes: 3 },
    ],
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Sidebar user={user} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Subreddit />} />
              <Route path="/profile" element={<UserProfile user={user} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
