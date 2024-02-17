import React from 'react';
import { render } from '@testing-library/react';
import AvailabilityDisplay from './AvailabilityDisplay';

describe('AvailabilityDisplay Component', () => {
    it('renders availability display with correct data', () => {
        const musician = {
            _id: '123',
            name: 'Test Musician',
            imageUrl: 'test_image_url',
            email: 'test@example.com',
            services: ['Service 1', 'Service 2']
        };
        const onCloseMock = jest.fn();

        const { getByText } = render(<AvailabilityDisplay musician={musician} onClose={onCloseMock} />);

        expect(getByText(musician.name)).toBeInTheDocument();
        expect(getByText(musician.email)).toBeInTheDocument();
        expect(getByText(musician.services[0])).toBeInTheDocument();
        expect(getByText(musician.services[1])).toBeInTheDocument();
    });
});
