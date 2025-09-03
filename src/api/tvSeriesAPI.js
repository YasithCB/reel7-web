import axios from 'axios';
import { TMDB_API_KEY, TMDB_BASE_URL } from '../data/const';

/**
 * Fetch popular TV shows from TMDb.
 *
 * @async
 * @function getPopularTv
 * @param {number} [page=1] - The page number for pagination.
 * @returns {Promise<Object[]>} A promise that resolves to an array of popular TV shows with posters.
 */
export const getPopularTv = async (page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/tv/popular`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
        page,
      },
    });
    return res.data.results.filter((tv) => tv.poster_path);
  } catch (err) {
    console.error('Popular TV Error:', err.message);
    return [];
  }
};

/**
 * Get TV show details by TMDb ID.
 *
 * @async
 * @function getTvById
 * @param {number|string} id - The TMDb TV show ID.
 * @returns {Promise<Object|null>} A promise that resolves to TV show details or null on error.
 */
export const getTvById = async (id) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/tv/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US',
      },
    });
    return res.data;
  } catch (err) {
    console.error('TV By ID Error:', err.message);
    return null;
  }
};
