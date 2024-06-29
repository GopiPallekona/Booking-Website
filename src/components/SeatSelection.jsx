import React, { useContext, useState } from 'react';
import './SeatSelection.css';
import { BookingContext } from '../BookingContext';

const SeatSelection = ({ theater,selectedCity, onSeatSelect, selectedMovie, onConfirmSeats,navigate }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [ticketCount, setTicketCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedShowTiming, setSelectedShowTiming] = useState('');
  const {addBooking,bookedSeats}=useContext(BookingContext);
  const seatPrice = theater.pricePerSeat;

  const rows = 'ABCDEFGHIJ'.split('');
  const seatsPerRow = 8;

  const toggleSeat = seat => {
    if (!bookedSeats.includes(seat)) {
      setSelectedSeats(prevSeats => {
        const isSelected = prevSeats.includes(seat);
        const updatedSeats = isSelected
          ? prevSeats.filter(s => s !== seat)
          : [...prevSeats, seat];
        
        setTicketCount(updatedSeats.length);
        setTotalPrice(updatedSeats.length * seatPrice);
        return updatedSeats;
      });
    }
  };

  const handleConfirmSeats = () => {
    onSeatSelect(selectedSeats);
    // onConfirmSeats(selectedSeats);

    const booking = {
      city: selectedCity.name,
      theater: theater,
      movie: selectedMovie,
      seats: selectedSeats,
      date: selectedDate,
      showTiming: selectedShowTiming,
      totalPrice: totalPrice
    };

    // Add booking to context
    addBooking(booking);
    navigate("/summary")
  };

  const handleShowTimingChange = (timing) => {
    setSelectedShowTiming(timing);
  };

   
   


  return (
    <div className="seat-selection-container">
      <div className="seat-selection">
        <h2>Select Seats</h2>
        <div className="movie-info">
          {selectedMovie && (
            <p><strong>Movie:</strong> {selectedMovie.title}</p>
          )}
        </div>
        <div className="date-selection">
          <label htmlFor="date">Select Date: </label>
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </div>
        <div className="show-timing-selection">
          <label htmlFor="showTiming">Select Show Timing: </label>
          <select
            id="showTiming"
            className="animated-select"
            value={selectedShowTiming}
            onChange={e => handleShowTimingChange(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="18:00">6:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="21:00">9:00 PM</option>
            <option value="22:30">10:30 PM</option>
          </select>
        </div>
        <div className="theater-layout">
          <div className="screen">Screen</div>
          {rows.map((row, rowIndex) => (
            <div key={row} className="seat-row">
              <div className="row-label">{row}</div>
              {[...Array(seatsPerRow)].map((_, seatIndex) => {
                const seatNumber = `${row}${seatIndex + 1}`;
                return (
                  <div
                    key={seatNumber}
                    className={`seat ${bookedSeats.includes(seatNumber) ? 'booked' : selectedSeats.includes(seatNumber) ? 'selected' : ''}`}
                    onClick={() => toggleSeat(seatNumber)}
                  >
                    {seatIndex + 1}
                  </div>
                );
              })}
              <div className="aisle-space"></div>
            </div>
          ))}
        </div>
        <button className="animated-button" onClick={handleConfirmSeats} disabled={!selectedDate || !selectedShowTiming}>
          Confirm Seats
        </button>
      </div>
      <div className="seat-summary">
        <h3>Multiplex Theatre Showing Screen 1</h3>
        <div className="ticket-info">
          {selectedMovie && (
            <p><strong>Movie:</strong> {selectedMovie.title}</p>
          )}
          <p><strong>Date:</strong> {selectedDate}</p>
          <p><strong>Show Timing:</strong> {selectedShowTiming}</p>
          <p><strong>Tickets:</strong> {ticketCount}</p>
          <p><strong>Total:</strong> ₹{totalPrice}</p>
        </div>
        <div className="seat-legend">
          <div><span className="seat available"></span> Available</div>
          <div><span className="seat booked"></span> Booked</div>
          <div><span className="seat selected"></span> Selected</div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;


