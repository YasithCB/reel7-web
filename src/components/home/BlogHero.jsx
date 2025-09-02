import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPopularMovies } from "../../api/tmdb"; // <-- using the axios helper
import '../../assets/css/BlogHero.css'

export default function BlogHero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getPopularMovies();
      setMovies(data.slice(0, 5)); // show 5 movies like your blog grid
    }
    fetchData();
  }, []);

  return (
    <section id="blog-hero" className="blog-hero section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="blog-grid">
          {movies.length > 0 && (
            <>
              {/* Featured Movie (Large) */}
              <article className="blog-item featured" data-aos="fade-up">
                <img
                  src={`https://image.tmdb.org/t/p/w780${movies[0].backdrop_path}`}
                  alt={movies[0].title}
                  className="img-fluid"
                />
                <div className="blog-content">
                  <div className="post-meta">
                    <span className="date">
                      {new Date(movies[0].release_date).toDateString()}
                    </span>
                    <span className="category">⭐ {movies[0].vote_average}</span>
                  </div>
                  <h2 className="post-title">
                    <NavLink to={`/movie/${movies[0].id}`} title={movies[0].title}>
                      {movies[0].title}
                    </NavLink>
                  </h2>
                </div>
              </article>

              {/* Regular Movies */}
              {movies.slice(1).map((movie, index) => (
                <article
                  key={movie.id}
                  className="blog-item film-img-container-m"
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                    alt={movie.title}
                    className="img-fluid film-img"
                  />
                  <div className="blog-content">
                    <div className="post-meta">
                      <span className="date">
                        {new Date(movie.release_date).toDateString()}
                      </span>
                      <span className="category">⭐ {movie.vote_average}</span>
                    </div>
                    <h3 className="post-title">
                      <NavLink to={`/movie/${movie.id}`} title={movie.title}>
                        {movie.title}
                      </NavLink>
                    </h3>
                  </div>
                </article>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
