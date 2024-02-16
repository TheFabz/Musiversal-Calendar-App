import React, { useState, useEffect } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookingsPage.css';
import config from '../../../config.json';

const fetchUrl = `${config.backendUrl}/booking/get-prepared-bookings`;

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });
                const data = await response.json();
                setBookings(data.bookings);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setLoading(false);
            }
        };
        
        fetchBookings();
    }, []);

    console.log(bookings);
    return (
        <div className="bookings-page">
            <h2>All Bookings</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="booking-list">
                    {bookings.map(booking => (
                        <BookingCard key={booking._id} booking={booking} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default BookingsPage;
