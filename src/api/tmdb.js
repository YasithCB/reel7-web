import axios from "axios";
import { TMDB_API_KEY, TMDB_BASE_URL } from "../data/const";

const API_KEY = TMDB_API_KEY; // 🔑 replace with your key
const BASE_URL = TMDB_BASE_URL;

// Fetch popular movies
export const getPopularMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/popular`, {
    params: { api_key: API_KEY, language: "en-US", page: 1 },
  });
  return res.data.results;
};

// Search movies
export const searchMovies = async (query) => {
  const res = await axios.get(`${BASE_URL}/search/movie`, {
    params: { api_key: API_KEY, language: "en-US", query, page: 1 },
  });
  return res.data.results;
};

// Get movie details (with trailer videos)
export const getMovieDetails = async (id) => {
  const res = await axios.get(`${BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: "en-US",
      append_to_response: "videos,credits", // trailers + cast
    },
  });
  return res.data;
};

/**
 * Fetch movies by language
 * @param {string} lang - Language code (en, hi, ta, etc.)
 * @param {number} page - Page number (optional, default 1)
 * @returns array of movies
 */
export const getMoviesByLanguage = async (lang, page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
        sort_by: "popularity.desc",
        with_original_language: lang,
        page,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error("TMDb Error:", err.message);
    return [];
  }
};

export const getPopularTv = async (page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/tv/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: "en-US",
        page,
      },
    });
    return res.data.results.filter(tv => tv.poster_path);
  } catch (err) {
    console.error("Popular TV Error:", err.message);
    return [];
  }
};

