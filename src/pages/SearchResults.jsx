import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { searchMoviesByName } from '../api/moviesAPI';
import MoviesGrid from '../components/MoviesGrid';

export default function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('release_date'); // default sorting

  const location = useLocation();

  // Get query param from URL
  const params = new URLSearchParams(location.search);
  const query = params.get('query');

  useEffect(() => {
    if (!query) return;

    const fetchMovies = async () => {
      const results = await searchMoviesByName(query);
      setMovies(results);
    };

    fetchMovies();
  }, [query]);

  // Sorting function
  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortBy) {
      case 'popularity':
        return b.popularity - a.popularity;
      case 'rating':
        return b.vote_average - a.vote_average;
      case 'release_date':
        return new Date(b.release_date || 0) - new Date(a.release_date || 0);
      default:
        return 0;
    }
  });

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="btn-group">
          <button
            className={`btn ${sortBy === 'popularity' ? 'toggle-btn-orange-selected' : 'toggle-btn-orange'}`}
            onClick={() => setSortBy('popularity')}
          >
            Popularity
          </button>
          <button
            className={`btn ${sortBy === 'rating' ? 'toggle-btn-orange-selected' : 'toggle-btn-orange'}`}
            onClick={() => setSortBy('rating')}
          >
            Rating
          </button>
          <button
            className={`btn ${sortBy === 'release_date' ? 'toggle-btn-orange-selected' : 'toggle-btn-orange'}`}
            onClick={() => setSortBy('release_date')}
          >
            Release Date
          </button>
        </div>
      </div>

      <MoviesGrid
        title={`Search Results for "${query}"`} // main heading
        subtitle={`Found ${movies.length} movies`} // optional subheading
        list={sortedMovies} // array of movie objects
      />
    </div>
  );
}
