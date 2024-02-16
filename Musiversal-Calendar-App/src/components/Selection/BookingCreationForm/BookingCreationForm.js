import React, { useState } from 'react';
import './BookingCreationForm.css';
import NotificationBanner from '../NotificationBanner/NotificationBanner';
import config from '../../../config.json';

const fetchUrl = `${config.backendUrl}/booking/create`;

function BookingCreationForm({ slot, musicianServices, musicianId, onClose, onFormClose }) {
    const [notification, setNotification] = useState({ message: '', type: '' });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const customerName = formData.get('customerName');
        const customerEmail = formData.get('customerEmail');
        const requestedServices = formData.getAll('services');

        const requestBody = {
            customerName,
            customerEmail,
            bookedDate: slot.start_time.split('T')[0],
            musicianId,
            availabilityId: slot.slot_id,
            requestedServices
        };

        try {
            const response = await fetch(fetchUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const responseData = await response.json();

            if (response.ok) {
                setNotification({ message: responseData.message || 'Booking created successfully', type: 'success' });
            } else {
                setNotification({ message: responseData.message || 'An error occurred', type: 'error' });
            }
        } catch (error) {
            setNotification({ message: 'Error creating booking', type: 'error' });
            console.error('Error creating booking:', error);
        } finally {
            setTimeout(() => {
                onClose(); 
                onFormClose();
            }, 2000);
        }
    };

    const handleNotificationClose = () => {
        setNotification({ message: '', type: '' });
    };

    return (
        <>
            <div className="booking-modal">
                <div className="booking-modal-content" onClick={(event) => event.stopPropagation()}>
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Booking Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="customerName">Customer Name:</label>
                            <input type="text" id="customerName" name="customerName" required />
                        </div>
                        <div>
                            <label htmlFor="customerEmail">Customer Email:</label>
                            <input type="email" id="customerEmail" name="customerEmail" required />
                        </div>
                        <div>
                            <label htmlFor="services">Select Services:</label>
                            <select id="services" name="services" multiple>
                                {musicianServices.map((service, index) => (
                                    <option key={index} value={service}>{service}</option>
                                ))}
                            </select>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="modal-overlay"></div>
            </div>
            {notification.message && (
                <NotificationBanner message={notification.message} type={notification.type} onClose={handleNotificationClose} />
            )}
        </>
    );
}

export default BookingCreationForm;
