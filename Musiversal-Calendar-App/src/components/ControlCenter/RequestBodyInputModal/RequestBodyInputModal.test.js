import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RequestBodyInputModal from './RequestBodyInputModal';

describe('RequestBodyInputModal Component', () => {
    it('renders modal with correct initial JSON input', () => {
        const isOpen = true;
        const onRequestClose = jest.fn();
        const onSubmit = jest.fn();
        const requestBodyFields = ['name', 'email'];

        render(
            <RequestBodyInputModal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose} 
                onSubmit={onSubmit} 
                requestBodyFields={requestBodyFields} 
            />
        );

        const initialJson = screen.getByRole('textbox');

        expect(initialJson).toBeInTheDocument();
        expect(initialJson.value).toBe('{\n  "name": "",\n  "email": ""\n}');

        const closeButton = screen.getByRole('button');
        expect(closeButton).toBeInTheDocument();
    });

    it('submits correct JSON input when form is submitted', async () => {
        const isOpen = true;
        const onRequestClose = jest.fn();
        const onSubmit = jest.fn();
        const requestBodyFields = ['name', 'email'];

        render(
            <RequestBodyInputModal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose} 
                onSubmit={onSubmit} 
                requestBodyFields={requestBodyFields}
            />
        );

        const inputJson = screen.getByRole('textbox');
        fireEvent.change(inputJson, { target: { value: '{"name": "John", "email": "john@example.com"}' } });

        const submitButton = screen.getByRole('button', { name: 'Submit' });
        fireEvent.click(submitButton);

        expect(onSubmit).toHaveBeenCalledWith('{"name": "John", "email": "john@example.com"}');
    });

    it('closes modal when close button is clicked', () => {
        const isOpen = true;
        const onRequestClose = jest.fn();
        const onSubmit = jest.fn();
        const requestBodyFields = ['name', 'email'];

        render(
            <RequestBodyInputModal 
                isOpen={isOpen} 
                onRequestClose={onRequestClose} 
                onSubmit={onSubmit} 
                requestBodyFields={requestBodyFields} 
            />
        );

        const closeButton = screen.getByRole('button');
        expect(closeButton).toBeInTheDocument();

        fireEvent.click(closeButton);

        expect(onRequestClose).toHaveBeenCalledTimes(1);
    });
});
