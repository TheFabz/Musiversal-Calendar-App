import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ControlCenterPage from './ControlCenterPage';

describe('ControlCenterPage Component', () => {
    it('renders control center page with buttons', async () => {
        const { getByText, getByRole, queryByText } = render(<ControlCenterPage />);

        expect(getByText('Reset ALL')).toBeInTheDocument();
        expect(getByText('Get All Musicians')).toBeInTheDocument();
        expect(getByText('Delete All Musicians')).toBeInTheDocument();
        expect(getByText('Unbook All')).toBeInTheDocument();


        fireEvent.click(getByText('Unbook All'));

        expect(queryByText('Loading...')).toBeNull(); 
        expect(getByText('Server Response')).toBeInTheDocument(); 
    });
});
