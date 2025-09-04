import React, { useEffect, useState } from 'react';
import { getMoviesByLanguage, getPopularMovies } from '../api/moviesAPI';
import MoviesSlider from '../components/home/MoviesSlider';
import Loader from '../components/Loader';

export default function Movies() {
  const [loading, setLoading] = useState(false); // loading state

  const [popularMovies, setPopularMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [englishMovies, setEnglishMovies] = useState([]);
  const [tamilMovies, setTamilMovies] = useState([]);
  const [teluguMovies, setTeluguMovies] = useState([]);
  const [malayalamMovies, setMalayalamMovies] = useState([]);
  const [koreanMovies, setKoreanMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let tempList = await getPopularMovies();
      setPopularMovies(tempList.slice(0, 20)); // first 20 popular movies

      tempList = await getMoviesByLanguage('hi');
      setHindiMovies(tempList); // hindi movies

      tempList = await getMoviesByLanguage('en');
      setEnglishMovies(tempList); // english movies

      tempList = await getMoviesByLanguage('ta');
      setTamilMovies(tempList); // Tamil movies

      tempList = await getMoviesByLanguage('te');
      setTeluguMovies(tempList); // Telugu movies

      tempList = await getMoviesByLanguage('ml');
      setMalayalamMovies(tempList); // Malayalam movies

      tempList = await getMoviesByLanguage('ko');
      setKoreanMovies(tempList); // korean movies
    }
    fetchData().then((r) => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <MoviesSlider
            title={'Most Popular Movies'}
            subtitle={"What's up in this month"}
            list={popularMovies}
          />
          <MoviesSlider
            title={'Hindi Movies'}
            subtitle={"What's up in this month"}
            list={hindiMovies}
          />
          <MoviesSlider
            title={'English Movies'}
            subtitle={"What's up in this month"}
            list={englishMovies}
          />
          <MoviesSlider
            title={'Korean Movies'}
            subtitle={"What's up in this month"}
            list={koreanMovies}
          />
          <MoviesSlider
            title={'Tamil Movies'}
            subtitle={"What's up in this month"}
            list={tamilMovies}
          />
          <MoviesSlider
            title={'Malayalam Movies'}
            subtitle={"What's up in this month"}
            list={malayalamMovies}
          />
          <MoviesSlider
            title={'Telugu Movies'}
            subtitle={"What's up in this month"}
            list={teluguMovies}
          />
        </div>
      )}
    </>
  );
}
