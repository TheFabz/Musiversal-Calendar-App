import React from 'react';
import { render, fireEvent, waitFor, queryByText } from '@testing-library/react';
import ApiButton from './ApiButton';

describe('ApiButton Component', () => {
    it('renders button and opens modal if requiresRequestBody is true', async () => {
        const setServerResponseMock = jest.fn();
        const fetchUrl = '/test-url';
        const httpVerb = 'POST';
        const buttonContent = 'Test Button';
        const requestBodyFields = ['field1', 'field2'];

        const { getByText, queryByRole } = render(
            <ApiButton
                requiresRequestBody={true}
                fetchUrl={fetchUrl}
                httpVerb={httpVerb}
                buttonContent={buttonContent}
                setServerResponse={setServerResponseMock}
                requestBodyFields={requestBodyFields}
            />
        );

        const button = getByText(buttonContent);
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        await waitFor(() => {
            const modal = document.querySelector('.modal');
            expect(modal).toBeInTheDocument();

            expect(modal).toHaveTextContent('Enter Request Body JSON');

            requestBodyFields.forEach(field => {
                expect(modal).toHaveTextContent(field);
            });
        });
    });

    it('renders button and does not open modal if requiresRequestBody is false', () => {
        const setServerResponseMock = jest.fn();
        const fetchUrl = '/test-url';
        const httpVerb = 'GET';
        const buttonContent = 'Test Button';

        const { getByText, queryByRole } = render(
            <ApiButton
                requiresRequestBody={false}
                fetchUrl={fetchUrl}
                httpVerb={httpVerb}
                buttonContent={buttonContent}
                setServerResponse={setServerResponseMock}
            />
        );

        const button = getByText(buttonContent);
        expect(button).toBeInTheDocument();

        fireEvent.click(button);

        expect(queryByRole('dialog')).toBeNull();
    });
});
