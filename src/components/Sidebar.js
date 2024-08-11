import React from 'react';
import './Sidebar.css';

function Sidebar({ user }) {
  return (
    <aside className="sidebar">
      <h2>Subscribed Subreddits</h2>
      <ul>
        {user.subscribedSubreddits.map((subreddit, index) => (
          <li key={index}><a href={`/${subreddit}`}>r/{subreddit}</a></li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
