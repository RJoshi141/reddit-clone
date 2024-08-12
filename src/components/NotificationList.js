// src/components/NotificationList.js
import React from 'react';
import './NotificationList.css'; // Create this CSS file for styles

function NotificationList({ notifications }) {
  return (
    <div className="notification-list">
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="notification-item">
            <p>{notification.message}</p>
            <span className="notification-time">{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationList;
