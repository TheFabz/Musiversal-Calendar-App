// ResponseBox.js
import React from 'react';
import './ResponseBox.css';

const ResponseBox = ({ responseData }) => {
    // Convert the response data to a beautified JSON string with indentation
    const formattedResponse = JSON.stringify(responseData, null, 2);

    return (
        <div className="response-box">
            <h2>Server Response</h2>
            <pre>{formattedResponse}</pre>
        </div>
    );
}

export default ResponseBox;
