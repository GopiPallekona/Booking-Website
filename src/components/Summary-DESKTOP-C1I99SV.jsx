import React from 'react';
import './Summary.css'
const Summary = ({ city, theater, movie, seats }) => {
  const price = seats.length * theater.pricePerSeat;

  return (
    <div className="summary">
      <h2>Booking Summary</h2>
      <p>City: {city}</p>
      <p>Theater: {theater.name}</p>
      <p>Movie: {movie.title}</p>
      <p>Seats: {seats.join(', ')}</p>
      <p>Total Price: ${price}</p>
    </div>
  );
};

export default Summary;
