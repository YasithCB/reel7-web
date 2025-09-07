import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/MoviesGrid.css';

export default function MoviesGrid({ title, subtitle, list, type }) {
  return (
    <section id="movie-showcase" className="movie-showcase section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{subtitle}</h2>
        <div>
          <span className="description-title">{title}</span>
        </div>
      </div>

      {/* Grid */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="movies-grid">
          {list
            .filter((movie) => movie.poster_path || movie.backdrop_path)
            .map((movie) => (
              <NavLink key={movie.id} to={`/${type}/${movie.id}`}>
                <div className="blog-post-item">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="movie-showcase-content">
                    <div className="post-meta mb-2 justify-content-between align-items-center">
                      <span className="mb-1">
                        <i className="bi bi-clock"></i>{' '}
                        {movie.release_date
                          ? new Date(movie.release_date).toDateString()
                          : movie.first_air_date
                            ? new Date(movie.first_air_date).toDateString()
                            : 'N/A'}
                      </span>
                      <span className="bg-yellow text-black fw-bold px-2 py-1 rounded-3">
                        <i className="bi bi-star"></i>
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <h2 className="m-0">{movie.title || movie.name}</h2>
                    <div className="read-more">
                      Read More | Watch <i className="bi bi-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </section>
  );
}
