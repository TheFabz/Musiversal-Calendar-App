import React, { useState } from 'react';
import './Slot.css';
import BookingCreationForm from '../BookingCreationForm/BookingCreationForm';

function Slot({ slot, musicianServices, musicianId }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    };

    const [showBookingForm, setShowBookingForm] = useState(false);

    const toggleBookingForm = () => {
        setShowBookingForm(!showBookingForm);
    };

    return (
        <div className={`slot ${slot.is_booked ? 'booked' : 'available'}`} onClick={!slot.is_booked ? toggleBookingForm : null}>
            <p>{formatDate(slot.start_time)} - {formatDate(slot.end_time)}</p>
            {showBookingForm && <BookingCreationForm slot={slot} musicianServices={musicianServices} musicianId={musicianId} onClose={toggleBookingForm} />}
        </div>
    );
}

export default Slot;
