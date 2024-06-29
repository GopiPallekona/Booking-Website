import React from 'react';
import './Summary.css'
import { Link } from 'react-router-dom';
const Summary = ({ city, theater, movie, seats }) => {
  const price = seats.length * theater.pricePerSeat;

  return (
    <div className="summary">
      <h2>Booking Summary</h2>
      <p>City: {city}</p>
      <p>Theater: {theater.name}</p>
      <p>Movie: {movie.title}</p>
      <p>Show-Timing: {movie.title}</p>

      <p>Seats: {seats.join(', ')}</p>
      <p>Total Price: ${price}</p>
      <Link to={"/city"}><button className='animated-button'>Go to Home</button></Link>
    </div>
  );
};

export default Summary;
