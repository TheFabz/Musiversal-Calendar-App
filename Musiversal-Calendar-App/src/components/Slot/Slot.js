import React from 'react';
import './Slot.css'; // Import Slot CSS file

function Slot({ slot }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className={`slot ${slot.is_booked ? 'booked' : 'available'}`}>
            <p>{formatDate(slot.start_time)} - {formatDate(slot.end_time)}</p>
        </div>
    );
}

export default Slot;
