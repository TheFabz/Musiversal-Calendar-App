import React from 'react';
import { render } from '@testing-library/react';
import BookingCard from './BookingCard';

describe('BookingCard Component', () => {
  it('renders booking information correctly', () => {
    const booking = {
      musicianInfo: {
        imageUrl: 'test_image_url',
        name: 'Test Musician',
      },
      bookingInfo: {
        bookedDate: '2024-02-17T15:00:00Z',
        requestedServices: ['Service 1', 'Service 2'],
        customerName: 'John Doe',
        customerEmail: 'john@example.com',
      },
      availabilityInfo: {
        startTime: '2024-02-17T15:00:00Z',
      },
    };

    const { getByText } = render(<BookingCard booking={booking} />);

    expect(getByText('Test Musician')).toBeInTheDocument();
    expect(getByText('Service 1, Service 2')).toBeInTheDocument();
    expect(getByText('3:00 PM')).toBeInTheDocument();
    expect(getByText('John Doe')).toBeInTheDocument();
    expect(getByText('john@example.com')).toBeInTheDocument();
  });
});
