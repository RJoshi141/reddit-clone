import React from 'react';
import './Sidebar.css';

function Sidebar({ user }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h2>Your Communities</h2>
        <ul>
          {user.subscribedSubreddits.map((subreddit, index) => (
            <li key={index}>
              <i className="fas fa-user-circle"></i>
              <a href={`/${subreddit}`}>r/{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section">
        <h2>Trending Subreddits</h2>
        <ul>
          <li><i className="fas fa-fire"></i> <a href="/trending1">r/trending1</a></li>
          <li><i className="fas fa-fire"></i> <a href="/trending2">r/trending2</a></li>
          <li><i className="fas fa-fire"></i> <a href="/trending3">r/trending3</a></li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
