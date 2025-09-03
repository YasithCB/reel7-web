import axios from 'axios';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../data/const';

/**
 * Search movies by name (case-insensitive, partial match).
 *
 * @async
 * @function searchMoviesByName
 * @param {string} name - Partial or full movie name.
 * @param {number} [page=1] - Page number for pagination.
 * @returns {Promise<Object[]>} A promise that resolves to an array of matching movies.
 */
export const searchMoviesByName = async (name, page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        query: name, // case-insensitive & supports partial names
        page,
        include_adult: true, // exclude adult movies unless you want them
      },
    });
    return res.data.results;
  } catch (err) {
    console.error('Search Movies Error:', err.message);
    return [];
  }
};

/**
 * Fetch popular movies from TMDb.
 *
 * @async
 * @function getPopularMovies
 * @returns {Promise<Object[]>} A promise that resolves to an array of popular movie objects.
 */
export const getPopularMovies = async () => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
    params: { api_key: TMDB_API_KEY, language: 'en-US', page: 1 },
  });
  return res.data.results;
};

/**
 * Search movies by query string.
 *
 * @async
 * @function searchMovies
 * @param {string} query - The search term (movie title, keyword, etc.).
 * @returns {Promise<Object[]>} A promise that resolves to an array of movies matching the query.
 */
export const searchMovies = async (query) => {
  const res = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
    params: { api_key: TMDB_API_KEY, language: 'en-US', query, page: 1 },
  });
  return res.data.results;
};

/**
 * Get movie details by TMDb ID.
 *
 * @async
 * @function getMovieDetails
 * @param {number|string} id - The TMDb movie ID.
 * @returns {Promise<Object>} A promise that resolves to movie details including trailers and credits.
 */
export const getMovieDetails = async (id) => {
  const res = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
    params: {
      api_key: TMDB_API_KEY,
      language: 'en-US',
      append_to_response: 'videos,credits', // trailers + cast
    },
  });
  return res.data;
};

/**
 * Get a movie by TMDb ID (basic details only).
 *
 * @async
 * @function getMovieById
 * @param {number|string} id - The TMDb movie ID.
 * @returns {Promise<Object|null>} A promise that resolves to movie details or null on error.
 */
export const getMovieById = async (id) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });
    return res.data;
  } catch (err) {
    console.error('Movie By ID Error:', err.message);
    return null;
  }
};

/**
 * Fetch movies filtered by original language and release year.
 *
 * @async
 * @function getMoviesByLanguage
 * @param {string} lang - The original language code (e.g., 'en', 'hi', 'ta').
 * @param {number} [year=2000] - The minimum release year (movies from this year onward).
 * @param {number} [page=1] - The page number for pagination.
 * @returns {Promise<Object[]>} A promise that resolves to an array of movies.
 */
export const getMoviesByLanguage = async (lang, year = 2000, page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        sort_by: 'popularity.desc',
        with_original_language: lang,
        primary_release_date_gte: `${year}-01-01`,
        page,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error('TMDb Error:', err.message);
    return [];
  }
};

/**
 * Get IMDb rating using the OMDb API.
 *
 * @async
 * @function getImdbRating
 * @param {string} imdbId - The IMDb ID (e.g., 'tt0111161').
 * @returns {Promise<string|null>} A promise that resolves to the IMDb rating (e.g., "8.8") or null on error.
 */
export const getImdbRating = async (imdbId) => {
  try {
    const res = await axios.get(`https://www.omdbapi.com/`, {
      params: {
        i: imdbId,
        apikey: process.env.OMDB_API_KEY,
      },
    });
    return res.data.imdbRating;
  } catch (err) {
    console.error('IMDb Rating Error:', err.message);
    return null;
  }
};

/**
 * Fetch videos (trailers, teasers, clips, etc.) for a movie by TMDb ID.
 *
 * @async
 * @function getMovieVideos
 * @param {number|string} movieId - The TMDb movie ID.
 * @returns {Promise<Object[]>} A promise that resolves to an array of video objects.
 */
export const getMovieVideos = async (movieId) => {
  const response = await axios.get(`${TMDB_BASE_URL}/movie/${movieId}/videos`, {
    params: { api_key: TMDB_API_KEY, language: 'en-US' },
  });
  return response.data.results;
};
