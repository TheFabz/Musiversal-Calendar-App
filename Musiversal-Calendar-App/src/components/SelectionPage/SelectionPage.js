import React, { useState, useEffect } from 'react';
import MusicianCard from '../MusicianCard/MusicianCard';
import AvailabilityDisplay from '../AvailabilityDisplay/AvailabilityDisplay';
import './SelectionPage.css';

import config from '../../config.json';

const fetchUrl = `${config.backendUrl}/users/get-all`;

function SelectionPage({ onReceiveMusicians, onSelect }) {
    const [musicians, setMusicians] = useState([]);
    const [selectedMusician, setSelectedMusician] = useState(null);
    const [showAvailability, setShowAvailability] = useState(false);

    useEffect(() => {
        fetchMusicians();
    }, []);

    const fetchMusicians = async () => {
        try {
            const response = await fetch(fetchUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch musicians');
            }
            const data = await response.json();
            setMusicians(data);
            onReceiveMusicians(data);
        } catch (error) {
            console.error('Error fetching musicians:', error);
        }
    };

    const handleMusicianSelect = (musician) => {
        setSelectedMusician(musician);
        setShowAvailability(true);
        onSelect(musician);
    };

    const handleCloseAvailability = () => {
        setShowAvailability(false);
        setSelectedMusician(null);
    };

    return (
        <div className="selection-container">
            <div className="selection-page-container">
                <div className="selection-page">
                    <div className="musician-cards">
                        {musicians.map((musician) => (
                            <MusicianCard
                                key={musician.id}
                                musician={musician}
                                onSelect={handleMusicianSelect}
                            />
                        ))}
                    </div>
                </div>
                {showAvailability && selectedMusician && (
                    <AvailabilityDisplay
                        musician={selectedMusician}
                        onClose={handleCloseAvailability}
                    />
                )}
            </div>
        </div>
    );
}

export default SelectionPage;
