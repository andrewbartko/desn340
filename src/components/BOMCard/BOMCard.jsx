// eslint-disable-next-line no-unused-vars
import React from 'react';
import './BOMCard.css';


function BOMCard() {
    return (
        <div className="bom-card">
            <div className="bom-card__image-container">
                <img
                    src="src/assets/072e06fc6aab8dff775554be559175da.png"
                    alt="Bike"
                    className="bom-card__image"
                />
            </div>
            <div className="bom-card__content">
                <div className="bom-card__text">
                    <p>
                        A great choice for a youngster’s first pedal bike! Ultra-light single
                        speed with a coaster brake and rear hand brake. Quick tuned and ready to ride.
                        <br />
                        Will fit kids in the 4 to 7 year old range.
                        <br />
                        20” x 1.75” street tires on alloy rims.
                    </p>
                </div>
                <span className="bom-card__highlight">Known issues:</span>
                <span className="bom-card__text">
                    brake cable will likely need replacement before the end of the first season.
                    <br />
                </span>
                <span className="bom-card__underline">
                    Available As-Is at Bike Edmonton for $75.
                </span>
            </div>
        </div>
    );
}

export default BOMCard;
