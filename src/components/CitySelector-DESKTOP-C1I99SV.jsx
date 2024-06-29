import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CitySelector = ({ cities, onCityChange }) => {
  const moviePosters = [
    // Replace these URLs with the actual URLs of the movie posters you want to display
    'https://via.placeholder.com/200x300?text=Movie+1',
    'https://via.placeholder.com/200x300?text=Movie+2',
    'https://via.placeholder.com/200x300?text=Movie+3',
    'https://via.placeholder.com/200x300?text=Movie+4',
    'https://via.placeholder.com/200x300?text=Movie+5'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="city-selector-container">
      <div className="city-selector">
        <h2>Select Your City</h2>
        <select className="animated-select" onChange={e => onCityChange(e.target.value)}>
          <option value="">Select City</option>
          {cities.map(city => (
            <option key={city.name} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>
      <div className="movie-poster-slider">
        <h2>Now Showing</h2>
        <Slider {...settings}>
          {moviePosters.map((poster, index) => (
            <div key={index} className="poster-slide">
              <img src={poster} alt={`Movie ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CitySelector;
