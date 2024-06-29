import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const CitySelector = ({ cities, onCityChange }) => {
  const moviePosters = [
    // Replace these URLs with the actual URLs of the movie posters you want to display
    'https://posters.movieposterdb.com/19_12/2017/7294534/s_7294534_2a17cd41.jpg',
    'https://posters.movieposterdb.com/20_01/2019/8594012/s_8594012_47cd8949.jpg',
    'https://posters.movieposterdb.com/19_12/2017/6025224/s_6025224_686409ef.jpg',
    'https://posters.movieposterdb.com/20_01/2019/7283064/s_7283064_cf6c78c4.jpg',
    'https://posters.movieposterdb.com/14_09/2013/2011276/s_2011276_05f1dc29.jpg',
    'https://posters.movieposterdb.com/15_03/2015/3195644/s_3195644_9f5fc24f.jpg',
    'https://posters.movieposterdb.com/19_12/2017/4849438/s_4849438_057d0afb.jpg',
    'https://posters.movieposterdb.com/23_11/2023/9663764/s_aquaman-and-the-lost-kingdom-movie-poster_fb816864.jpg',
    'https://posters.movieposterdb.com/23_09/2023/10676048/s_the-marvels-movie-poster_f0a9f282.jpg',
    'https://posters.movieposterdb.com/21_11/2022/9692040/s_9692040_65313c4d.jpg',
    'https://posters.movieposterdb.com/22_06/2022/6385680/s_6385680_1ef1b91b.jpg'
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
       <Link to={"/mybookings"}> <button className='animated-button'>My-Bookings</button></Link>
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
