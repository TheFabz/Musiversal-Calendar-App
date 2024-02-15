import React, { useState } from 'react';
import SelectionPage from './components/Selection/SelectionPage/SelectionPage';
import BookingsPage from './components/Bookings/BookingsPage/BookingsPage';
import './App.css';

function App() {
    const [showAvailability, setShowAvailability] = useState(false);
    const [selectedMusician, setSelectedMusician] = useState(null);
    const [selectedTab, setSelectedTab] = useState('selection');

    const handleMusicianSelect = (musician) => {
        setSelectedMusician(musician);
        setShowAvailability(true);
    };

    const handleCloseAvailability = () => {
        setShowAvailability(false);
        setSelectedMusician(null);
    };

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <div className="App">
            <header>
                <h1>Musiversal - Code Challenge</h1>
                <h2>Calendar App</h2>
                <div className="tabs">
                    <button className={selectedTab === 'selection' ? 'active' : ''} onClick={() => handleTabSelect('selection')}>Selection Page</button>
                    <button className={selectedTab === 'bookings' ? 'active' : ''} onClick={() => handleTabSelect('bookings')}>Bookings Page</button>
                </div>
            </header>
            <main className="App-main">
                {selectedTab === 'selection' ? <SelectionPage onSelect={handleMusicianSelect} /> : <BookingsPage onClose={handleCloseAvailability} />}

            </main>
            <footer>
                <p>Fabio Rodrigues - Feb 2024</p>
            </footer>
        </div>
    );
}

export default App;
