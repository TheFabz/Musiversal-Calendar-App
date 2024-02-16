// ControlCenterPage.js
import React, { useState } from 'react';
import './ControlCenterPage.css';
import Button from '../ApiButton/ApiButton';
import ResponseBox from '../ResponseBox/ResponseBox'; 

function ControlCenterPage() {
    const [serverResponse, setServerResponse] = useState('No response yet.');

    return (
        <div className="control-center">
            <div className="category-wrapper">
                <div className="category-column users">
                    <Button
                        httpVerb="GET"
                        fetchUrl="/users/get-all"
                        requestBody={{}}
                        requiresRequestBody={false}
                        buttonContent="Get All Musicians"
                        setServerResponse={setServerResponse} 
                    />
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/users/delete-all"
                        requestBody={{}}
                        requiresRequestBody={false}
                        buttonContent="Delete All Musicians"
                        setServerResponse={setServerResponse} 
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/users/generate-sample-musicians"
                        requestBody={{}}
                        requiresRequestBody={false}
                        buttonContent="Generate Sample Musicians"
                        setServerResponse={setServerResponse} 
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/users/create"
                        requestBody={{}}
                        requiresRequestBody={true}
                        buttonContent="Create New Musician"
                        setServerResponse={setServerResponse} 
                    />
                </div>
                <div className="category-column availabilities">
                    {/* Add buttons for availabilities */}
                </div>
                <div className="category-column bookings">
                    {/* Add buttons for bookings */}
                </div>
            </div>
            <ResponseBox responseData={serverResponse} /> {/* Include ResponseBox component */}
        </div>
    );
}

export default ControlCenterPage;
