import axios from 'axios';
import {
  API_BASE_URL,
  OMDB_API_KEY,
  OMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_BASE_URL,
} from '../data/const';

/**
 * Fetches the Telegram link for a given movie from the backend API.
 *
 * @async
 * @function getMovieLink
 * @param {string} movieName - The name (or partial name) of the movie to search.
 * @returns {Promise<Object>} - Resolves to an object containing the movie link, e.g., { linkId: "8" }.
 * @throws {Error} - Throws an error if the movie is not found or if the API call fails.
 *
 * @example
 * try {
 *   const movie = await getMovieLink("Nobody 2");
 *   console.log(movie.linkId); // "8"
 * } catch (error) {
 *   console.error("Movie not found:", error.message);
 * }
 */
export async function getMovieLink(movieName) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/movie?name=${encodeURIComponent(movieName)}`
    );

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.error || 'Movie not found');
    }

    return result; // { linkId: "8" }
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}

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
    const response = await axios.get(`${TMDB_BASE_URL}/search/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        query: name, // case-insensitive & supports partial names
        page,
        include_adult: true, // exclude adult movies unless you want them
      },
    });
    return {
      results: response.data.results || [],
      total_pages: response.data.total_pages || 1,
      page: response.data.page || 1,
    };
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
 * Fetch movies by category and optional subcategory
 * @param {string} category - Main category ("Genres", "Trending", "Movies Language", "TV Language")
 * @param {string|number} subId - Subcategory ID or code (genre ID, language code, or 'movie'/'tv')
 * @param type - movie / tv
 * @param {number} page - Page number (for pagination)
 * @returns {Promise<object>} - Returns { results, total_pages, page }
 */
export const getByCategory = async (category, subId, type, page = 1) => {
  try {
    let url = '';
    const params = { api_key: TMDB_API_KEY, page };

    if (category === 'movie-genres' || category === 'tv-genres') {
      url = `${TMDB_BASE_URL}/discover/${type}`;
      params.with_genres = subId;
    } else if (category === 'trending') {
      url = `${TMDB_BASE_URL}/trending/${type}/day`;
    } else if (category === 'movie-lang' || category === 'tv-lang') {
      // subId = language code like 'en', 'hi', 'fr'
      url = `${TMDB_BASE_URL}/discover/${type}`;
      params.with_original_language = subId;
    }

    const response = await axios.get(url, { params });
    return {
      results: response.data.results || [],
      total_pages: response.data.total_pages || 1,
      page: response.data.page || 1,
    };
  } catch (error) {
    console.error('Error fetching movies by category:', error.message);
    return { results: [], total_pages: 1, page: 1 };
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
    const res = await axios.get(OMDB_BASE_URL, {
      params: {
        i: imdbId,
        apikey: OMDB_API_KEY,
      },
    });
    return res.data.imdbRating;
  } catch (err) {
    console.error('IMDb Rating Error:', err.message);
    return null;
  }
};

/**
 * Fetches video trailers for a given movie or TV show from TMDb API.
 *
 * @async
 * @function getTrailer
 * @param {number|string} id - The ID of the movie or TV show in TMDb.
 * @param {"movie"|"tv"} type - The type of media: "movie" or "tv".
 * @returns {Promise<Array>} - Resolves to an array of video objects from TMDb (e.g., trailers, teasers).
 * @throws {Error} - Throws an error if the API call fails.
 *
 * @example
 * // Fetch trailers for a movie
 * const movieTrailers = await getTrailer(550, "movie");
 *
 * // Fetch trailers for a TV show
 * const tvTrailers = await getTrailer(1399, "tv");
 */
export const getTrailer = async (id, type) => {
  const response = await axios.get(`${TMDB_BASE_URL}/${type}/${id}/videos`, {
    params: { api_key: TMDB_API_KEY, language: 'en-US' },
  });
  return response.data.results;
};

/**
 * Fetches details of a movie or TV show from TMDb by ID.
 *
 * @async
 * @function getMovieTvById
 * @param {number|string} id - The TMDb ID of the movie or TV show.
 * @param {"movie"|"tv"} type - The type of media: "movie" or "tv".
 * @returns {Promise<Object|null>} - TMDb data object for the movie or TV show.
 *                                   Returns null if the request fails.
 *
 * @example
 * const movie = await getMovieTvById(550, "movie");
 * console.log(movie.title);
 *
 * const tv = await getMovieTvById(1399, "tv");
 * console.log(tv.name);
 */
export const getMovieTvById = async (id, type) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/${type}/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });
    return res.data;
  } catch (err) {
    console.error('getMovieTvById Error:', err.message);
    return null;
  }
};

/**
 * Fetches the IMDb ID for a movie or TV show from TMDb.
 *
 * @async
 * @function getImdbId
 * @param {number|string} id - The TMDb ID of the movie or TV show.
 * @param {"movie"|"tv"} type - The type of media: "movie" or "tv".
 * @returns {Promise<string|null>} - IMDb ID (e.g., "tt0944947") or null if not found.
 *
 * @example
 * const imdbIdMovie = await getImdbId(550, "movie");
 * const imdbIdTv = await getImdbId(1399, "tv");
 */
export const getImdbId = async (id, type) => {
  try {
    let res;
    if (type === 'tv') {
      res = await axios.get(`${TMDB_BASE_URL}/${type}/${id}/external_ids`, {
        params: { api_key: TMDB_API_KEY },
      });
      return res.data.imdb_id || null;
    } else {
      res = await axios.get(`${TMDB_BASE_URL}/movie/${id}`, {
        params: { api_key: TMDB_API_KEY },
      });
      return res.data.imdb_id || null;
    }
  } catch (err) {
    console.error('getImdbId Error:', err.message);
    return null;
  }
};
