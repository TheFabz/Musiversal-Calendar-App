// ResponseBox.js
import React from 'react';
import './ResponseBox.css';


const ResponseBox = ({ responseData }) => {
    return (
        <div className="response-box">
            <h2>Server Response</h2>
            <p>{JSON.stringify(responseData)}</p>
        </div>
    );
}

export default ResponseBox;
