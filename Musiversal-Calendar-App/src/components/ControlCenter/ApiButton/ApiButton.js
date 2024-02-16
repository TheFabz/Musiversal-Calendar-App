// Button.js
import React, { useState } from 'react';
import './ApiButton.css';
import RequestBodyInputModal from '../RequestBodyInputModal/RequestBodyInputModal';

import config from '../../../config.json';

const apiBase = config.backendUrl;

const Button = ({ requiresRequestBody, fetchUrl, httpVerb, buttonContent, setServerResponse }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [requestBody, setRequestBody] = useState({});

    const handleClick = async () => {
        if (requiresRequestBody) {
            setIsModalOpen(true);
        } else {
            await performRequest();
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleSubmitModal = async (inputJson) => {
        if (!isValidJson(inputJson)) {
            inputJson = '{}';
        }

        const parsedJson = JSON.parse(inputJson);
        setRequestBody(parsedJson);
        await performRequest();
        setIsModalOpen(false);
    };

    const performRequest = async () => {
        try {
            let options = {
                method: httpVerb,
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            if (requiresRequestBody) {
                options.body = JSON.stringify(requestBody);
            }

            const response = await fetch(apiBase + fetchUrl, options);
            const responseData = await response.json();
            setServerResponse(responseData); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const isValidJson = (inputJson) => {
        try {
            JSON.parse(inputJson);
            return true;
        } catch (error) {
            return false;
        }
    };

    return (
        <>
            <button className="control-button" onClick={handleClick}>{buttonContent}</button>
            <RequestBodyInputModal isOpen={isModalOpen} onRequestClose={handleCloseModal} onSubmit={handleSubmitModal} />
        </>
    );
}

export default Button;
