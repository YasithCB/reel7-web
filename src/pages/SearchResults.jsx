import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesGrid from '../components/MoviesGrid';
import { searchMoviesByName, searchMoviesByCategory } from '../api/moviesAPI';
import Loader from '../components/Loader';

export default function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('release_date');
  const [loading, setLoading] = useState(false); // 👈 new loading state

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const query = params.get('query'); // search by name
  const category = params.get('category'); // search by category
  const sub = params.get('sub'); // subcategory
  const subId = params.get('id'); // subcategory id

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // 👈 start loading

      let results = [];

      if (query) {
        results = await searchMoviesByName(query);
      } else if (category && sub) {
        let subObj = null;

        if (category === 'Genres') {
          subObj = subId;
        } else if (
          category === 'Movies Language' ||
          category === 'TV Language'
        ) {
          subObj = subId;
        } else {
          subObj = sub; // for Trending
        }

        if (subObj) {
          results = await searchMoviesByCategory(category, subObj);
        }
      }

      setMovies(results);
      setLoading(false); // 👈 stop loading
    };

    fetchMovies();
  }, [query, category, sub]);

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

  const pageTitle = query ? `Search Results for "${query}"` : sub;

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <div>
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
            title={pageTitle}
            subtitle={`Found ${movies.length} movies`}
            list={sortedMovies}
          />
        </div>
      )}
    </div>
  );
}
