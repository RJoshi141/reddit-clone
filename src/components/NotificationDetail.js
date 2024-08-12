// src/components/NotificationDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './NotificationDetail.css';

function NotificationDetail() {
  const { id } = useParams();
  
  // Mock notification data
  const notifications = [
    { id: 1, message: 'Your post has been upvoted!', details: 'Your post "First Post" received 5 upvotes.', time: '2024-08-10 10:00 AM' },
    { id: 2, message: 'Someone commented on your post.', details: 'Comment: "Nice post!" on "Second Post".', time: '2024-08-10 11:00 AM' },
  ];

  // Find the notification with the matching id
  const notification = notifications.find(notification => notification.id === parseInt(id));

  return (
    <div className="notification-detail">
      <h2>Notification Details</h2>
      {notification ? (
        <>
          <p>{notification.message}</p>
          <p>{notification.details}</p>
          <p><strong>Time:</strong> {notification.time}</p>
        </>
      ) : (
        <p>Notification not found</p>
      )}
    </div>
  );
}

export default NotificationDetail;
