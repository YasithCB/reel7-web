import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MoviesGrid from '../components/MoviesGrid';
import { searchMoviesByName, getByCategory } from '../api/moviesAPI';
import Loader from '../components/Loader';

export default function SearchResults() {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState('release_date');
  const [loading, setLoading] = useState(false); // 👈 new loading state

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const query = params.get('query'); // search by name
  const category = params.get('category'); // search by category
  const type = params.get('type'); // type --> movie /tv /mix
  const sub = params.get('sub'); // subcategory
  const subId = params.get('id'); // subcategory id

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // 👈 start loading

      let data = [];

      if (query) {
        data = await searchMoviesByName(query, page);
      } else if (category) {
        data = await getByCategory(category, subId, type, page);
      }

      setMovies(data.results);
      setTotalPages(data.total_pages);
      setLoading(false);
    };

    fetchMovies();
  }, [query, category, page, sub]);

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
            subtitle={`Found ${movies.length * totalPages} movies`}
            list={sortedMovies}
            type={type}
          />
        </div>
      )}

      {/* Pagination Tabs */}
      <div className="flex justify-center my-6 space-x-1">
        {/* First */}
        <button
          className={`px-3 py-1 border rounded-lg ${
            page === 1
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-orange-600 border-orange-400 hover:bg-orange-50'
          }`}
          onClick={() => setPage(1)}
          disabled={page === 1}
        >
          « First
        </button>

        {/* Prev */}
        <button
          className={`px-3 py-1 border rounded-lg ${
            page === 1
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-orange-600 border-orange-400 hover:bg-orange-50'
          }`}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          ‹ Prev
        </button>

        {/* Page Numbers (window around current page) */}
        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;

          // Only show first, last, current, +/- 2 pages
          if (
            pageNum === 1 ||
            pageNum === totalPages ||
            (pageNum >= page - 2 && pageNum <= page + 2)
          ) {
            return (
              <button
                key={pageNum}
                className={`px-3 py-1 border rounded-lg ${
                  page === pageNum
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'text-gray-700 border-gray-300 hover:bg-orange-50'
                }`}
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          }

          // Ellipsis
          if (
            (pageNum === page - 3 && page > 4) ||
            (pageNum === page + 3 && page < totalPages - 3)
          ) {
            return (
              <span key={pageNum} className="px-2 text-gray-500">
                ...
              </span>
            );
          }

          return null;
        })}

        {/* Next */}
        <button
          className={`px-3 py-1 border rounded-lg ${
            page === totalPages
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-orange-600 border-orange-400 hover:bg-orange-50'
          }`}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next ›
        </button>

        {/* Last */}
        <button
          className={`px-3 py-1 border rounded-lg ${
            page === totalPages
              ? 'text-gray-400 border-gray-300 cursor-not-allowed'
              : 'text-orange-600 border-orange-400 hover:bg-orange-50'
          }`}
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
        >
          Last »
        </button>
      </div>
    </div>
  );
}
