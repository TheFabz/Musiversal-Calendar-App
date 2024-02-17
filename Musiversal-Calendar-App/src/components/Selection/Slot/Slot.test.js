import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slot from './Slot';
import BookingCreationForm from '../BookingCreationForm/BookingCreationForm';

jest.mock('../BookingCreationForm/BookingCreationForm', () => jest.fn(() => <div data-testid="booking-creation-form">Booking Creation Form</div>));

describe('Slot Component', () => {
    it('toggles booking form when slot is available and clicked', () => {
        const slotAvailable = {
            start_time: '2024-02-17T15:00:00Z',
            end_time: '2024-02-17T16:00:00Z',
            is_booked: false,
        };
        const slotBooked = {
            start_time: '2024-02-17T16:00:00Z',
            end_time: '2024-02-17T17:00:00Z',
            is_booked: true,
        };
        const musicianServices = ['Service 1', 'Service 2'];
        const musicianId = '123';
        const onFormCloseMock = jest.fn();

        const { getByTestId, queryByTestId } = render(
            <div>
                <Slot slot={slotAvailable} musicianServices={musicianServices} musicianId={musicianId} onFormClose={onFormCloseMock} />
                <Slot slot={slotBooked} musicianServices={musicianServices} musicianId={musicianId} onFormClose={onFormCloseMock} />
            </div>
        );

        const availableSlot = getByTestId('slot-available');
        const bookedSlot = getByTestId('slot-booked');

        // Check if available slot is clickable and triggers BookingCreationForm
        fireEvent.click(availableSlot);
        expect(BookingCreationForm).toHaveBeenCalled();

        // Check if booked slot is not clickable
        fireEvent.click(bookedSlot);
        expect(BookingCreationForm).toHaveBeenCalledTimes(1); // BookingCreationForm should not be called again
    });
});
