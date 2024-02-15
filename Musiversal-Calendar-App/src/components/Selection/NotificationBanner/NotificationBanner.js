import React from 'react';
import './NotificationBanner.css';

function NotificationBanner({ message, type, onClose }) {
    if (!message) {
        return null;
    }

    console.log("IN NOTIFICATION COMPONENT!");
    console.log('message: ' + message);
    console.log('type: ' + type);

    const handleClose = () => {
        onClose();
    };

    return (
        <div className={`notification-banner ${type}`}>
            <p>{message}</p>
            <span className="close" onClick={handleClose}>&times;</span>
        </div>
    );
}

export default NotificationBanner;
