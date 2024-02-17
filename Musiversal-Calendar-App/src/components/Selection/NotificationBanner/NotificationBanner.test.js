import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NotificationBanner from './NotificationBanner';

describe('NotificationBanner Component', () => {
    it('renders notification banner with correct message and type', () => {
        const message = 'Test Message';
        const type = 'success';
        const onCloseMock = jest.fn();

        const { getByText } = render(<NotificationBanner message={message} type={type} onClose={onCloseMock} />);

        const messageElement = getByText(message);
        const closeButton = getByText('×');

        expect(messageElement).toBeInTheDocument();
        expect(messageElement).toHaveTextContent(message);

        fireEvent.click(closeButton);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('does not render notification banner when message is empty', () => {
        const { container } = render(<NotificationBanner message="" type="success" onClose={jest.fn()} />);
        expect(container.firstChild).toBeNull();
    });
});
