import React from "react";
import './BikeListComponent.css'

const BikeListComponent = () => {
  return (
    <div className="bike-list-container">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>


      <div className="sort-buttons">
        <button className="active">Relevance</button>
        <button>Price ascending</button>
        <button>Price descending</button>
        <button>Recommended</button>
      </div>


      <div className="bike-container">
          <div className="bike-card" >
              <img style={{ width: "100%" }}
                  src="src/assets/072e06fc6aab8dff775554be559175da.png"
                  alt="Bike"
                  className="bom-card__image"
                  />
              <h3>Bike 1</h3>
              <p>$0</p>
          </div>

          <div className="bike-card">
              <img style={{ width: "100%" }}
                  src="src/assets/072e06fc6aab8dff775554be559175da.png"
                  alt="Bike"
                  className="bom-card__image"
              />
              <h3>Bike 2</h3>
              <p>$0</p>
          </div>
          <div className="bike-card">
              <img style={{ width: "100%" }}
                  src="src/assets/072e06fc6aab8dff775554be559175da.png"
                  alt="Bike"
                  className="bom-card__image"
              />
              <h3>Bike 3</h3>
              <p>$0</p>
          </div>
      </div>
    </div>
  );
};

export default BikeListComponent;
