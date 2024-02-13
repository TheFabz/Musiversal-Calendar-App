import React, { useState } from 'react';
import SelectionPage from './components/SelectionPage/SelectionPage';
import AvailabilityDisplay from './components/AvailabilityDisplay/AvailabilityDisplay';
import './App.css'; // Import any global styles

function App() {
    const [showAvailability, setShowAvailability] = useState(false);
    const [selectedMusician, setSelectedMusician] = useState(null);

    const handleMusicianSelect = (musician) => {
        setSelectedMusician(musician);
        setShowAvailability(true);
    };

    const handleCloseAvailability = () => {
        setShowAvailability(false);
        setSelectedMusician(null); // Reset selected musician
    };

    return (
        <div className="App">
            <header>
                <h1>Musician Selection App</h1>
            </header>
            <main className="App-main">
                <SelectionPage onSelect={handleMusicianSelect} />
            </main>
            {/*{showAvailability && selectedMusician && (*/}
            {/*    <AvailabilityDisplay musician={selectedMusician} onClose={handleCloseAvailability} />*/}
            {/*)}*/}
            <footer>
                <p>Footer content goes here</p>
            </footer>
        </div>
    );
}

export default App;
