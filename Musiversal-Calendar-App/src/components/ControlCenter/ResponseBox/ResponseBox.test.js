import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponseBox from './ResponseBox';

describe('ResponseBox Component', () => {
  it('renders server response correctly', () => {
    const responseData = {
      key1: 'value1',
      key2: 'value2',
      key3: {
        nestedKey: 'nestedValue'
      }
    };

    render(<ResponseBox responseData={responseData} />);

    const responseText = screen.getByText(/key1.*value1.*key2.*value2.*key3.*nestedKey.*nestedValue/);
    expect(responseText).toBeInTheDocument();
  });
});
