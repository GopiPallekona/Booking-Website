import React from 'react';
import './TheaterList.css'
const TheaterList = ({ theaters, onTheaterSelect }) => {
  return (
    <div className="theater-list">
      <h2>Select Theater</h2>
      {theaters.map(theater => (
        <div
          key={theater.name}
          className="theater-item"
          onClick={() => onTheaterSelect(theater)}
        >
          <h3>{theater.name}</h3>
          <p>Address: {theater.address}</p>
        </div>
      ))}
    </div>
  );
};

export default TheaterList;
