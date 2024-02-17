import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import SelectionPage from './SelectionPage';

describe('SelectionPage Component', () => {
    it('displays musicians and triggers onSelect function on musician click', async () => {
        const mockMusicians = [
            { id: 1, name: 'Musician 1', imageUrl: 'musician1.jpg', services: ['1','2'] },
            { id: 2, name: 'Musician 2', imageUrl: 'musician2.jpg', services: ['1','2'] }
        ];

        const onReceiveMusiciansMock = jest.fn();

        const onSelectMock = jest.fn();

        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockMusicians),
            })
        );

        const { getByText } = render(<SelectionPage onReceiveMusicians={onReceiveMusiciansMock} onSelect={onSelectMock} />);

        await waitFor(() => {
            expect(onReceiveMusiciansMock).toHaveBeenCalledWith(mockMusicians);
        });

        expect(getByText('Musician 1')).toBeInTheDocument();
        expect(getByText('Musician 2')).toBeInTheDocument();

        fireEvent.click(getByText('Musician 1'));

        expect(onSelectMock).toHaveBeenCalledWith(mockMusicians[0]);
    });
});
