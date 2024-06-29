import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import CitySelector from './components/CitySelector';
import TheaterList from './components/TheaterList';
import MovieList from './components/MovieList';
import SeatSelection from './components/SeatSelection';
import Summary from './components/Summary';
import data from './data/dummyData';
import './App.css';
import RecentBookings from './components/RecentBookings';
import { BookingProvider } from './BookingContext';

const App = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  const navigate = useNavigate();

  const handleCityChange = cityName => {
    setSelectedCity(data.cities.find(city => city.name === cityName));
    setSelectedTheater(null);
    setSelectedMovie(null);
    setSelectedSeats([]);
    setBookedSeats([]); // Reset booked seats on city change
  };

  const handleTheaterSelect = theater => {
    setSelectedTheater(theater);
    setSelectedMovie(null);
    setSelectedSeats([]);
    setBookedSeats([]); // Reset booked seats on theater change
  };

  const handleMovieSelect = movie => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
  };

  const handleSeatSelect = seats => {
    setSelectedSeats(seats);
  };

  const handleConfirmSeats = seats => {
    setBookedSeats(prevBookedSeats => [...prevBookedSeats, ...seats]);
    // navigate('/summary');
  };

  useEffect(() => {
    if (selectedCity) {
      navigate('/theaters');
    }
  }, [selectedCity]);

  useEffect(() => {
    if (selectedTheater) {
      navigate('/movies');
    }
  }, [selectedTheater]);

  useEffect(() => {
    if (selectedMovie) {
      navigate('/seats');
    }
  }, [selectedMovie]);

  return (
    <div className="app">
      <h1 className="title">Movie Booking System</h1>
      <Routes>
        <Route path="/city" element={<CitySelector cities={data.cities} onCityChange={handleCityChange} />} />
        <Route path="/theaters" element={selectedCity ? <TheaterList theaters={selectedCity.theaters} onTheaterSelect={handleTheaterSelect} /> : <Navigate to="/city" />} />
        <Route path="/movies" element={selectedTheater ? <MovieList movies={selectedTheater.movies} onMovieSelect={handleMovieSelect} /> : <Navigate to="/theaters" />} />
        <Route path="/seats" element={selectedMovie ? <SeatSelection theater={selectedTheater} bookedSeats={bookedSeats} onSeatSelect={handleSeatSelect} selectedMovie={selectedMovie} onConfirmSeats={handleConfirmSeats} selectedCity={selectedCity} navigate={navigate} /> : <Navigate to="/movies" />} />
        <Route path="/summary" element={selectedSeats.length > 0 ? <Summary city={selectedCity.name} theater={selectedTheater} movie={selectedMovie} seats={selectedSeats} /> : <Navigate to="/seats" />} />
        <Route path="/" element={<Navigate to="/city" />} />
        <Route path="/mybookings" element={<RecentBookings />} />
      </Routes>
    </div>
  );
};

const WrappedApp = () => (
  <Router>
   <BookingProvider>
   <App />
   </BookingProvider>
  </Router>
);

export default WrappedApp;
