import React, { useState, useEffect } from 'react';
import BookingCard from '../BookingCard/BookingCard';
import './BookingsPage.css';
import config from '../../../config.json';

const fetchUrl = `${config.backendUrl}/booking/get-prepared-bookings`;

function BookingsPage() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data.bookings);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setError('Unable to fetch bookings. Please try again later.');
                setLoading(false);
            }
        };
        
        fetchBookings();
    }, []);

    return (
        <div className="bookings-page">
            <h2>All Bookings</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <>
                    {bookings.length === 0 ? (
                        <p>No bookings at this time</p>
                    ) : (
                        <div className="booking-list">
                            {bookings.map(booking => (
                                <BookingCard key={booking._id} booking={booking} />
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default BookingsPage;
