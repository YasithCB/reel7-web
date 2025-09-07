import React, { useEffect, useState } from 'react';
import MoviesSlider from '../components/home/MoviesSlider';
import { getPopularTv, getTvSeriesByLanguage } from '../api/tvSeriesAPI';
import Loader from '../components/Loader';

export default function TvSeries() {
  const [loading, setLoading] = useState(false); // loading state

  const [popular, setPopular] = useState([]);
  const [eng, setEng] = useState([]);
  const [hindi, setHindi] = useState([]);
  const [korean, setKorean] = useState([]);
  const [japan, setJapan] = useState([]);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let tempList = await getPopularTv();
      setPopular(tempList); // popular Tv-Series

      tempList = await getTvSeriesByLanguage('en');
      setEng(tempList); // English Tv-Series

      tempList = await getTvSeriesByLanguage('ko');
      setKorean(tempList); // Korean Tv-Series

      tempList = await getTvSeriesByLanguage('hi');
      setHindi(tempList); // Hindi Tv-Series

      tempList = await getTvSeriesByLanguage('ja');
      setJapan(tempList); // Japan Tv-Series
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
            title={'Most Popular TV Series'}
            subtitle={"What's up in this month"}
            list={popular}
            isMovie={false}
          />
          <MoviesSlider
            title={'Korean Dramas'}
            subtitle={"What's up in this month"}
            list={korean}
            isMovie={false}
          />
          <MoviesSlider
            title={'English TV Series'}
            subtitle={"What's up in this month"}
            list={eng}
            isMovie={false}
          />
          <MoviesSlider
            title={'Japan Anime'}
            subtitle={"What's up in this month"}
            list={japan}
            isMovie={false}
          />
          <MoviesSlider
            title={'Hindi Shows'}
            subtitle={"What's up in this month"}
            list={hindi}
            isMovie={false}
          />
        </div>
      )}
    </>
  );
}
