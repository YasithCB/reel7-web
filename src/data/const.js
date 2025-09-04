export const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
export const TMDB_BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const OMDB_BASE_URL = import.meta.env.VITE_OMDB_BASE_URL;
export const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const MENU_ITEMS = [
  {
    title: 'Trending',
    subCategories: [
      { name: 'Top Movies', type: 'movie', id: 'top_rated' },
      { name: 'Top TV Shows', type: 'tv', id: 'top_rated' },
      { name: 'Popular Actors', type: 'person', id: 'popular' },
    ],
  },
  {
    title: 'Movies Language',
    subCategories: [
      { name: 'English', id: 'en' },
      { name: 'Spanish', id: 'es' },
      { name: 'Hindi', id: 'hi' },
      { name: 'French', id: 'fr' },
      { name: 'German', id: 'de' },
      { name: 'Italian', id: 'it' },
      { name: 'Japanese', id: 'ja' },
      { name: 'Korean', id: 'ko' },
      { name: 'Portuguese', id: 'pt' },
      { name: 'Russian', id: 'ru' },
      { name: 'Chinese', id: 'zh' },
    ],
  },
  {
    title: 'TV Language',
    subCategories: [
      { name: 'English', id: 'en' },
      { name: 'Spanish', id: 'es' },
      { name: 'Hindi', id: 'hi' },
      { name: 'French', id: 'fr' },
      { name: 'German', id: 'de' },
      { name: 'Italian', id: 'it' },
      { name: 'Japanese', id: 'ja' },
      { name: 'Korean', id: 'ko' },
      { name: 'Portuguese', id: 'pt' },
      { name: 'Russian', id: 'ru' },
      { name: 'Chinese', id: 'zh' },
    ],
  },
  {
    title: 'Genres',
    subCategories: [
      { name: 'Action', id: 28 },
      { name: 'Adventure', id: 12 },
      { name: 'Animation', id: 16 },
      { name: 'Comedy', id: 35 },
      { name: 'Crime', id: 80 },
      { name: 'Documentary', id: 99 },
      { name: 'Drama', id: 18 },
      { name: 'Family', id: 10751 },
      { name: 'Fantasy', id: 14 },
      { name: 'History', id: 36 },
      { name: 'Horror', id: 27 },
      { name: 'Music', id: 10402 },
      { name: 'Mystery', id: 9648 },
      { name: 'Romance', id: 10749 },
      { name: 'Science Fiction', id: 878 },
      { name: 'TV Movie', id: 10770 },
      { name: 'Thriller', id: 53 },
      { name: 'War', id: 10752 },
      { name: 'Western', id: 37 },
    ],
  },
];
