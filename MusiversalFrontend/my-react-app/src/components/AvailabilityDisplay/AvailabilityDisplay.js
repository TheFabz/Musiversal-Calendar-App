// AvailabilityDisplay.js
import React, { useEffect, useState } from 'react';
import './AvailabilityDisplay.css';
import Slot from '../Slot/Slot'; // Import the Slot component
import config from '../../config.json';

const fetchUrl = `${config.backendUrl}/availability/get-musician-slots`;

function AvailabilityDisplay({ musician, onClose }) {
    const [availability, setAvailability] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAvailabilityData = async () => {
            try {
                const todayDate = new Date().toISOString().split('T')[0];
                const response = await fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        userId: musician._id,
                        date: todayDate
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    setAvailability(data.availableSlots);
                } else {
                    console.error('Failed to fetch availability data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching availability data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAvailabilityData();
    }, [musician]);

    return (
        <div className="availability-display">
            <button className="close-button" onClick={onClose}>X</button>
            <div className="musician-info">
                <img src={musician.imageUrl} alt={musician.name} className="musician-image" />
                <div className="info">
                    <h2>{musician.name}</h2>
                    <p><strong>Email:</strong> {musician.email}</p>
                    <h3>Services</h3>
                    <ul>
                        {musician.services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ul>
                </div>
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="availability-slots">
                    <h3>Availability Slots</h3>
                    {availability.length > 0 ? (
                        availability.map((slot, index) => (
                            <Slot key={index} startTime={slot.start_time} endTime={slot.end_time} />
                        ))
                    ) : (
                        <p>No available slots</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default AvailabilityDisplay;
