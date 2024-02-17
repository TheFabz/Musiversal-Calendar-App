import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import BookingCreationForm from './BookingCreationForm';

jest.mock('../NotificationBanner/NotificationBanner', () => () => <div data-testid="notification-banner">Notification Banner</div>);

describe('BookingCreationForm Component', () => {
    it('submits booking form with correct data', async () => {
        const slot = {
            slot_id: '123',
            start_time: '2024-02-17T15:00:00Z',
            end_time: '2024-02-17T16:00:00Z',
        };
        const musicianServices = ['Service 1', 'Service 2'];
        const musicianId = '456';
        const onCloseMock = jest.fn();
        const onFormCloseMock = jest.fn();

        const { getByText, getByLabelText, getByTestId } = render(
            <BookingCreationForm slot={slot} musicianServices={musicianServices} musicianId={musicianId} onClose={onCloseMock} onFormClose={onFormCloseMock} />
        );

        const bookingDateInput = getByLabelText('Booking Date:');
        fireEvent.change(bookingDateInput, { target: { value: '2024-02-17' } }); 
        fireEvent.click(getByText('Submit')); 

        await waitFor(() => expect(getByTestId('notification-banner')).toBeInTheDocument());
    });
});
