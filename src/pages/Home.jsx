import React from 'react';
import '../components/NavBar/navbar.jsx';
import BOMCard from '../components/BOMCard/BOMCard.jsx';
import MyFooter from '../components/MyFooter/MyFooter.jsx';
import './Home.css'; // Add a CSS file for responsive styles

function Home() {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-content">
                    <h1>Giving you the tools you need to enjoy cycling</h1>
                    <p>
                        Our vision is a city where cycling is safe, widespread, and accessible to people of all comfort levels.
                        We have helped thousands of people find a bike to ride and learn to fix their bike. Your financial support makes it possible for us to keep doing this work!
                    </p>
                    <button className="donate-button">Donate</button>
                </div>
                <div className="hero-image">
                    <img
                        src="src/assets/image 3.png"
                        alt="Bike-Edmonton-Large-Logo"
                    />
                </div>
            </div>

            {/* Bikes of the Month */}
            <div className="bikes-section">
                <h1>Bikes of The Month</h1>
                <div className="bikes-container">
                    <BOMCard />
                    <BOMCard />
                </div>
            </div>

            {/* Location Section */}
            <div className="location-section">
                <div className="location-image">
                    <img
                        src="src/assets/image%2026.png"
                        alt="Bike Edmonton Store"
                    />
                </div>
                <div className="location-info">
                    <h1>Bike Edmonton Downtown</h1>
                    <h2>
                        10612 105 Ave NW
                        <br />
                        Edmonton, AB
                        <br />
                        T5H 0L2
                    </h2>
                </div>
            </div>

            {/* Funders Section */}
            <div className="funders-section">
                <h2>Our Funders</h2>
                <div className="funders-container">
                    <img src="src/assets/image%2028.png" alt="Edmonton Logo" />
                    <img src="src/assets/image%2029.png" alt="Canada Logo" />
                    <img src="src/assets/image.png" alt="Eco Trust Logo" />
                </div>
            </div>

            {/* Footer */}
            <MyFooter />
        </>
    );
}

export default Home;
