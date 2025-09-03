import React, { useEffect, useState } from 'react';
import {
  getMoviesByLanguage,
  getPopularMovies,
  getPopularTv,
} from '../api/moviesAPI';
import MoviesSlider from '../components/home/MoviesSlider';

export default function TvSeries() {
  const [popularTvSeries, setPopularTvSeries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let tempList = await getPopularTv();
      setPopularTvSeries(tempList); // korean movies
    }
    fetchData();
  }, []);

  return (
    <>
      <MoviesSlider
        title={'Most Popular TV Series'}
        subtitle={"What's up in this month"}
        list={popularTvSeries}
      />
    </>
  );
}
