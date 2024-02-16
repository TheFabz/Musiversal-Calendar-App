import React, { useState } from 'react';
import './RequestBodyInputModal.css';

const RequestBodyInputModal = ({ isOpen, onRequestClose, onSubmit, requestBodyFields }) => {
    const generateInitialJson = (fields) => {
        const initialJson = {};
        if (fields) {
            fields.forEach(field => {
                const fieldName = field.includes('[]') ? field.replace(/\[\]/g, '') : field;
                initialJson[fieldName] = field.includes('[]') ? '[]' : '';
            });
        }
        return JSON.stringify(initialJson, null, 2);
    };

    const [inputJson, setInputJson] = useState(generateInitialJson(requestBodyFields));

    const handleSubmit = () => {
        onSubmit(inputJson);
        onRequestClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <span className="close" onClick={onRequestClose}>&times;</span>
                <h2>Enter Request Body JSON</h2>
                <textarea
                    value={inputJson}
                    onChange={(e) => setInputJson(e.target.value)}
                    placeholder="Enter JSON here..."
                    rows={10}
                ></textarea>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default RequestBodyInputModal;
