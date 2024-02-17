import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import BookingsPage from './BookingsPage';

jest.mock('../../../config.json', () => ({
  backendUrl: 'http://example.com',
}));

describe('BookingsPage Component', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ bookings: [] }),
    });
  });

  afterAll(() => {
    global.fetch.mockRestore();
  });

  it('renders loading text initially and then displays bookings', async () => {
    const { getByText, queryByText } = render(<BookingsPage />);

    expect(getByText('Loading...')).toBeInTheDocument();

    await waitForElementToBeRemoved(() => queryByText('Loading...'));

    expect(queryByText('Loading...')).toBeNull();
  });
});
