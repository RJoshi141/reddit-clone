import React from 'react';
import './UserProfile.css';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <div className="profile-header">
        <img
          src={user.profilePicture}
          alt={`${user.name}'s profile`}
          className="profile-picture"
        />
        <div className="profile-info">
          <h1>{user.name}'s Profile</h1>
          <p className="user-bio">{user.bio}</p>
        </div>
      </div>

      <div className="profile-section">
        <h2>Subscribed Subreddits</h2>
        <ul className="subreddit-list">
          {user.subscribedSubreddits.map((subreddit, index) => (
            <li key={index} className="subreddit-item">
              <a href={`#${subreddit}`}>{subreddit}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="profile-section">
        <h2>Upvotes Received</h2>
        <ul className="upvotes-list">
          {user.upvotedPosts.map((post, index) => (
            <li key={index} className="upvote-item">
              <span className="post-title">{post.title}</span>
              <span className="upvote-count">(Upvotes: {post.upvotes})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
