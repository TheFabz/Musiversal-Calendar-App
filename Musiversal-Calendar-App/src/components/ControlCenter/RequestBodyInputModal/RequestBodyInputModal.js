import React, { useState } from 'react';
import './RequestBodyInputModal.css';

const RequestBodyInputModal = ({ isOpen, onRequestClose, onSubmit }) => {
    const [inputJson, setInputJson] = useState('');

    const handleSubmit = () => {
        onSubmit(inputJson);
        setInputJson('');
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
