import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPopularMovies } from "../../api/tmdb"; // your axios helper
import "swiper/css";
import "../../assets/css/MoviesSlider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function MoviesSlider( { title,subtitle,list}) {

  return (
    <section id="featured-posts" className="featured-posts section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>{subtitle}</h2>
        <div>
          <span className="description-title">{title}</span>
        </div>
      </div>

      {/* Slider */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          speed={800}
          autoplay={{ delay: 5000 }}
          slidesPerView={5}
          spaceBetween={15}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1200: { slidesPerView: 5, spaceBetween: 15 },
          }}
        >
          {list
            .filter(movie => movie.poster_path) // skip if null
            .map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="blog-post-item">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="blog-post-content">
                  <div className="post-meta">
                    <span>
                      <i className="bi bi-person"></i> {movie.title}
                    </span>
                    <span>
                      <i className="bi bi-clock"></i>{" "}
                      {new Date(movie.release_date).toDateString()}
                    </span>
                    <span>
                      <i className="bi bi-star"></i> {movie.vote_average}
                    </span>
                  </div>
                  <h2>
                    <NavLink to={`/movie/${movie.id}`}>{movie.title}</NavLink>
                  </h2>
                  <p>{movie.overview.slice(0, 100)}...</p>
                  <NavLink
                    to={`/movie/${movie.id}`}
                    className="read-more"
                  >
                    Read More <i className="bi bi-arrow-right"></i>
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
