import React, { useState } from 'react';
import './ControlCenterPage.css';
import Button from '../ApiButton/ApiButton';
import ResponseBox from '../ResponseBox/ResponseBox';

function ControlCenterPage() {
    const [serverResponse, setServerResponse] = useState('No response yet.');

    return (
        <div className="control-center">
            <div className="category-wrapper">
                <div className="category-column reset">
                <Button
                        httpVerb="POST"
                        fetchUrl="/reset/reset"
                        requiresRequestBody={false}
                        buttonContent="Reset ALL"
                        setServerResponse={setServerResponse}
                    />
                </div>
                <div className="category-column users">
                    <Button
                        httpVerb="GET"
                        fetchUrl="/users/get-all"
                        requiresRequestBody={false}
                        buttonContent="Get All Musicians"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/users/delete-all"
                        requiresRequestBody={false}
                        buttonContent="Delete All Musicians"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/users/generate-sample-musicians"
                        requiresRequestBody={false}
                        buttonContent="Generate Sample Musicians"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/users/create"
                        requiresRequestBody={true}
                        buttonContent="Create New Musician"
                        setServerResponse={setServerResponse}
                        requestBodyFields={['name', 'email', 'imageUrl', 'services[]']}
                    />
                </div>
                <div className="category-column availabilities">
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/availability/delete-all"
                        requiresRequestBody={false}
                        buttonContent="Delete All Slots"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/availability/delete-user-slots"
                        requiresRequestBody={true}
                        buttonContent="Delete User Slots"
                        setServerResponse={setServerResponse}
                        requestBodyFields={['userId']}
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/availability/generate-week-slots-all-users"
                        requiresRequestBody={false}
                        buttonContent="Generate 1 Week Slots (All)"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/availability/generate-week-slots"
                        requiresRequestBody={true}
                        buttonContent="Generate 1 Week Slots (User)"
                        setServerResponse={setServerResponse}
                        requestBodyFields={['userId']}
                    />
                    <Button
                        httpVerb="PATCH"
                        fetchUrl="/availability//unbook-all"
                        requiresRequestBody={false}
                        buttonContent="Unbook All"
                        setServerResponse={setServerResponse}
                    />
                    
                </div>
                <div className="category-column bookings">
                    <Button
                        httpVerb="POST"
                        fetchUrl="/booking/create"
                        requiresRequestBody={true}
                        buttonContent="Create New Booking"
                        setServerResponse={setServerResponse}
                        requestBodyFields={[
                            'customerName',
                            'customerEmail',
                            'bookedDate',
                            'musicianId',
                            'availabilityId',
                            'requestedServices[]'
                        ]}
                    />
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/booking/delete-all"
                        requiresRequestBody={false}
                        buttonContent="Delete Bookings (All)"
                        setServerResponse={setServerResponse}
                    />
                    <Button
                        httpVerb="DELETE"
                        fetchUrl="/booking/delete-booking-given-id"
                        requiresRequestBody={true}
                        buttonContent="Delete a Booking"
                        setServerResponse={setServerResponse}
                        requestBodyFields={['id']}
                    />
                    <Button
                        httpVerb="GET"
                        fetchUrl="/booking/get-all"
                        requiresRequestBody={false}
                        buttonContent="Get All Bookings"
                        setServerResponse={setServerResponse}                    />
                    <Button
                        httpVerb="POST"
                        fetchUrl="/booking/get-all-musician-bookings"
                        requiresRequestBody={true}
                        buttonContent="Get All Bookings (User)"
                        setServerResponse={setServerResponse}
                        requestBodyFields={['musicianId']}
                    />
                </div>
            </div>
            <ResponseBox responseData={serverResponse} />
        </div>
    );
}

export default ControlCenterPage;
