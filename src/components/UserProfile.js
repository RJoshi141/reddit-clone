import React from 'react';
import './UserProfile.css';

function UserProfile({ user }) {
  return (
    <div className="user-profile">
      <h1>{user.name}'s Profile</h1>
      <h2>Subscribed Subreddits</h2>
      <ul>
        {user.subscribedSubreddits.map((subreddit, index) => (
          <li key={index}>{subreddit}</li>
        ))}
      </ul>
      <h2>Upvotes Received</h2>
      <ul>
        {user.upvotedPosts.map((post, index) => (
          <li key={index}>
            {post.title} (Upvotes: {post.upvotes})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
