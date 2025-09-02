import React, { useEffect, useState } from "react";
import BlogHero from "../components/home/BlogHero";
import { getMoviesByLanguage, getPopularMovies, getPopularTv } from "../api/tmdb";
import MoviesSlider from "../components/home/MoviesSlider";

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [hindiMovies, setHindiMovies] = useState([]);
  const [englishMovies, setEnglishMovies] = useState([]);
  const [tamilMovies, setTamilMovies] = useState([]);
  const [teluguMovies, setTeluguMovies] = useState([]);
  const [malayalamMovies, setMalayalamMovies] = useState([]);
  const [koreanMovies, setKoreanMovies] = useState([]);
  const [popularTvSeries, setPopularTvSeries] = useState([]);

  useEffect(() => {
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

      tempList = await getPopularTv();
      setPopularTvSeries(tempList); // korean movies

    }
    fetchData();
  }, []);

  return (
    <>
      {/*<BlogHero/>*/}
      <MoviesSlider title={'Most Popular Movies'} subtitle={'What\'s up in this month'} list={popularMovies}/>
      <MoviesSlider title={'Hindi Movies'} subtitle={'What\'s up in this month'} list={hindiMovies}/>
      <MoviesSlider title={'English Movies'} subtitle={'What\'s up in this month'} list={englishMovies}/>
      <MoviesSlider title={'Tamil Movies'} subtitle={'What\'s up in this month'} list={tamilMovies}/>
      <MoviesSlider title={'Malayalam Movies'} subtitle={'What\'s up in this month'} list={malayalamMovies}/>
      <MoviesSlider title={'Telugu Movies'} subtitle={'What\'s up in this month'} list={teluguMovies}/>
      <MoviesSlider title={'Korean Movies'} subtitle={'What\'s up in this month'} list={koreanMovies}/>

      <MoviesSlider title={'Most Popular TV Series'} subtitle={'What\'s up in this month'} list={popularTvSeries}/>
    </>
  );
}