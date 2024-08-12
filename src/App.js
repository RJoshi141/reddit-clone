import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Subreddit from './components/Subreddit';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MessageList from './components/MessageList';
import Conversation from './components/Conversation';
import NotificationList from './components/NotificationList';
import NotificationDetail from './components/NotificationDetail';
import Settings from './components/Settings';

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

  const conversations = [
    { id: 1, with: 'User2', latestMessage: 'Hi, how are you?' },
    { id: 2, with: 'User3', latestMessage: 'Hello!' },
  ];

  const notifications = [
    { message: 'Your post has been upvoted!', time: '2024-08-10 10:00 AM' },
    { message: 'Someone commented on your post.', time: '2024-08-10 11:00 AM' },
  ];

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
              <Route path="/messages" element={<MessageList conversations={conversations} />} />
              <Route path="/messages/:id" element={<Conversation />} />
              <Route path="/notifications" element={<NotificationList notifications={notifications} />} />
              <Route path="/notifications/:id" element={<NotificationDetail />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
