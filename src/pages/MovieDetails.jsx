import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getImdbRating, getMovieById } from '../api/moviesAPI';
import MovieTrailer from '../components/MovieTrailer';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [imdbRating, setImdbRating] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const data = await getMovieById(id);
      setMovie(data);

      if (data.imdb_id) {
        const imdbRating = await getImdbRating(data.imdb_id);
        setImdbRating(imdbRating);
      }
    }
    fetchMovie();
  }, [id]); // added id so it fetches when route changes

  if (!movie) return <div className="loading"></div>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <section id="blog-details" className="blog-details section">
            <div className="container" data-aos="fade-up">
              <article className="article">
                <div className="hero-img" data-aos="zoom-in">
                  <img
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        : movie.poster_path
                          ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                          : '/placeholder.jpg'
                    }
                    alt={movie.title}
                    className="img-fluid"
                    loading="lazy"
                  />
                  <div className="meta-overlay">
                    <div className="meta-categories">
                      <span className="text-white me-3">
                        {movie.genres
                          ? movie.genres.map((g) => g.name).join(' | ')
                          : 'N/A'}
                      </span>

                      <span className="bg-yellow text-black fw-bold px-4 py-2 rounded-3 me-2">
                        <i className="bi bi-star me-2"></i>
                        TMDb {movie.vote_average.toFixed(1)}
                      </span>

                      <span className="bg-yellow text-black fw-bold px-4 py-2 rounded-3">
                        <i className="bi bi-star me-2"></i>
                        IMDb {imdbRating ?? 'N/A'}
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className="article-content"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <div className="content-header">
                    <h1 className="title">{movie.title}</h1>

                    <div className="author-info">
                      <div className="author-details">
                        <img
                          src="/favicon.png"
                          alt="Author"
                          className="author-img"
                        />
                        <div className="info">
                          <h4>Movie Info</h4>
                          <span className="role">
                            Release Date: {movie.release_date}
                          </span>
                        </div>
                      </div>
                      <div className="post-meta">
                        <span className="date">
                          <i className="bi bi-calendar3"></i>{' '}
                          {movie.release_date}
                        </span>
                        <span className="divider">•</span>
                        <span className="comments">
                          <i className="bi bi-people"></i> {movie.vote_count}{' '}
                          votes
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <p className="lead">{movie.overview}</p>

                    <MovieTrailer movieId={movie.id} />

                    <h2>Movie Details</h2>
                    <ul>
                      <li>
                        Tagline :{' '}
                        <span className="bg-orange fs-6 px-4 py-1 rounded-3">
                          {movie.tagline || 'N/A'}
                        </span>
                      </li>
                      <li>Original Title : {movie.original_title}</li>
                      <li>Original Language : {movie.original_language}</li>
                      <li>Adult Content : {movie.adult ? 'Yes' : 'No'}</li>
                      <li>
                        Runtime :{' '}
                        {movie.runtime ? `${movie.runtime} min` : 'N/A'}
                      </li>
                      <li>Popularity : {movie.popularity}</li>
                      <li>Status : {movie.status}</li>
                      <li>Release Date : {movie.release_date}</li>

                      <li>
                        Genres :{' '}
                        {movie.genres
                          ? movie.genres.map((l, idx) => (
                              <span
                                key={l.iso_639_1}
                                className="bg-orange px-3 py-1 rounded me-1 fs-6"
                              >
                                {l.name}
                              </span>
                            ))
                          : 'N/A'}
                      </li>
                      <li>
                        Spoken Languages:{' '}
                        {movie.spoken_languages &&
                        movie.spoken_languages.length > 0
                          ? movie.spoken_languages.map((l, idx) => (
                              <span
                                key={l.iso_639_1}
                                className="bg-orange px-3 py-1 rounded me-1 fs-6"
                              >
                                {l.english_name}
                              </span>
                            ))
                          : 'N/A'}
                      </li>

                      <li>
                        Production Countries :{' '}
                        {movie.production_countries &&
                        movie.production_countries.length > 0
                          ? movie.production_countries
                              .map((c) => c.name)
                              .join(', ')
                          : 'N/A'}
                      </li>
                      <li>
                        Production Companies :{' '}
                        {movie.production_companies &&
                        movie.production_companies.length > 0
                          ? movie.production_companies.map((l, idx) => (
                              <span
                                key={l.iso_639_1}
                                className="bg-orange px-3 py-1 rounded me-1 fs-6"
                              >
                                {l.name}
                              </span>
                            ))
                          : 'N/A'}
                      </li>
                      <li>
                        Budget : ${movie.budget?.toLocaleString() || 'N/A'}
                      </li>
                      <li>
                        Revenue : ${movie.revenue?.toLocaleString() || 'N/A'}
                      </li>
                      <li>
                        Homepage :{' '}
                        {movie.homepage ? (
                          <a
                            href={movie.homepage}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {movie.homepage}
                          </a>
                        ) : (
                          'N/A'
                        )}
                      </li>
                      <li>IMDB ID : {movie.imdb_id || 'N/A'}</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
