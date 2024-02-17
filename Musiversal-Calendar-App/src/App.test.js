import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    it('renders the header with correct text', () => {
        const { getByText } = render(<App />);
        expect(getByText('Musiversal - Code Challenge')).toBeInTheDocument();
        expect(getByText('Calendar App')).toBeInTheDocument();
    });

    it('renders the default tab "Selection Page"', () => {
        const { getByRole } = render(<App />);
        expect(getByRole('button', { name: /Selection Page/i })).toHaveClass('active');
    });

    it('switches tabs when clicking on tab buttons', () => {
        const { getByRole, getByText } = render(<App />);

        fireEvent.click(getByText('Bookings Page'));
        expect(getByRole('button', { name: /Bookings Page/i })).toHaveClass('active');

        fireEvent.click(getByText('Control Center'));
        expect(getByRole('button', { name: /Control Center/i })).toHaveClass('active');
    });
});
