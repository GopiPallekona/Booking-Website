import React, { createContext, useState, useEffect } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState(() => {
    const storedBookings = localStorage.getItem('bookings');
    return storedBookings ? JSON.parse(storedBookings) : [];
  });

  const [bookedSeats, setBookedSeats] = useState(() => {
    const storedBookedSeats = localStorage.getItem('bookedSeats');
    return storedBookedSeats ? JSON.parse(storedBookedSeats) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('bookedSeats', JSON.stringify(bookedSeats));
  }, [bookedSeats]);

  const addBooking = (booking) => {
    setBookings(prevBookings => [...prevBookings, booking]);
    setBookedSeats(prevBookedSeats => [...prevBookedSeats, ...booking.seats]);
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, bookedSeats }}>
      {children}
    </BookingContext.Provider>
  );
};
