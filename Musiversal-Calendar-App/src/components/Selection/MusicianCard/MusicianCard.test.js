import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MusicianCard from './MusicianCard';

describe('MusicianCard Component', () => {
    it('renders musician card with correct data', () => {
        const musician = {
            id: '123',
            name: 'Test Musician',
            imageUrl: 'test_image_url',
            email: 'test@email.com',
            services: ['Service 1', 'Service 2']
        };
        const onSelectMock = jest.fn();

        const { getByText } = render(<MusicianCard musician={musician} onSelect={onSelectMock} />);

        expect(getByText(musician.name)).toBeInTheDocument();

        fireEvent.click(getByText(musician.name)); 

        expect(onSelectMock).toHaveBeenCalledWith(musician); 
    });
});
