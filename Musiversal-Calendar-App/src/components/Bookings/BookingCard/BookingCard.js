import React from 'react';
import './BookingCard.css';

function formatTime(timeString) {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(timeString).toLocaleTimeString('en-US', options);
}

function BookingCard({ booking }) {
    return (
        <div className="booking-card">
            <img className="booking-image" src={booking.musicianInfo.imageUrl} alt={booking.musicianInfo.name} />
            <div className="booking-info">
                <p><strong>Musician Name:</strong> {booking.musicianInfo.name}</p>
                <p><strong>Booked Date:</strong> {new Date(booking.bookingInfo.bookedDate).toLocaleDateString()}</p>
                <p><strong>Requested Services:</strong> {booking.bookingInfo.requestedServices.join(', ')}</p>
                <p><strong>Start Time:</strong> {formatTime(booking.availabilityInfo.startTime)}</p>
            </div>
            <div className="customer-info">
                <p><strong>Customer Name:</strong> {booking.bookingInfo.customerName}</p>
                <p><strong>Customer Email:</strong> {booking.bookingInfo.customerEmail}</p>
            </div>
        </div>
    );
}

export default BookingCard;
