import React from 'react';

function Slot({ startTime, endTime }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="slot">
            <p>{formatDate(startTime)} - {formatDate(endTime)}</p>
        </div>
    );
}

export default Slot;
