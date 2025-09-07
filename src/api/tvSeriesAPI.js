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
 * Fetch TV series by original language
 * @param {string} lang - ISO 639-1 language code (e.g. 'ko' for Korean, 'ja' for Japanese, 'hi' for Hindi)
 * @param {number} page - Page number for pagination (default: 1)
 * @returns {Promise<Array>} - List of TV series
 */
export const getTvSeriesByLanguage = async (lang, page = 1) => {
  try {
    const res = await axios.get(`${TMDB_BASE_URL}/discover/tv`, {
      params: {
        api_key: TMDB_API_KEY,
        language: 'en-US', // UI language
        sort_by: 'popularity.desc',
        with_original_language: lang, // filter by original language
        page,
      },
    });
    return res.data.results;
  } catch (err) {
    console.error('TMDb Error:', err.message);
    return [];
  }
};
