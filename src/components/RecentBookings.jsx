import React, { useContext } from 'react';
import { BookingContext } from '../BookingContext';
import './RecentBookings.css';

const RecentBookings = () => {
  const { bookings } = useContext(BookingContext);

  return (
    <div className="recent-bookings-container">
      <h2>Recent Bookings</h2>
      <ul className="recent-bookings-list">
        {bookings.map((booking, index) => (
          <li key={index} className="recent-bookings-item">
            <p><strong>City:</strong> {booking.city}</p>
            <p><strong>Theater:</strong> {booking.theater.name}</p>
            <p><strong>Movie:</strong> {booking.movie.title}</p>
            <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <p><strong>Show Timing:</strong> {booking.showTiming}</p>
            <p><strong>Total Price:</strong> ₹{booking.totalPrice}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentBookings;
