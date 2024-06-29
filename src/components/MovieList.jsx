import React from 'react';
import './Movielist.css'
const MovieList = ({ movies, onMovieSelect }) => {
  return (
    <div className="movie-list">
      <h2>Select Movie</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div
            key={movie.title}
            className="movie-item"
            onClick={() => onMovieSelect(movie)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>Duration: {movie.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
