import React, { useState, useEffect } from 'react';
import './MusicianCard.css';

function MusicianCard({ musician, onSelect }) {
    const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentServiceIndex(prevIndex =>
                prevIndex === musician.services.length - 1 ? 0 : prevIndex + 1
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, [musician.services.length]);

    const handleClick = () => {
        onSelect(musician);
    };

    return (
        <div className="musician-card" onClick={handleClick}>
            <img src={musician.imageUrl} alt={musician.name} />
            <h3>{musician.name}</h3>
            <div className="service-carousel">
                <p>{musician.services[currentServiceIndex]}</p>
            </div>
        </div>
    );
}

export default MusicianCard;
