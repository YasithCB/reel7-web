import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span className="sitename">REel7</span>
            </NavLink>
            <p className="mt-3">
              Discover and explore movies and TV shows from around the world.
              Your hub for entertainment in every language.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Movies</h4>
            <ul>
              <li>
                <NavLink to="/movies/now-playing">Now Playing</NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular">Popular</NavLink>
              </li>
              <li>
                <NavLink to="/movies/top-rated">Top Rated</NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming">Upcoming</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>TV Series</h4>
            <ul>
              <li>
                <NavLink to="/tv/airing-today">Airing Today</NavLink>
              </li>
              <li>
                <NavLink to="/tv/on-the-air">On The Air</NavLink>
              </li>
              <li>
                <NavLink to="/tv/popular">Popular</NavLink>
              </li>
              <li>
                <NavLink to="/tv/top-rated">Top Rated</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Languages</h4>
            <ul>
              <li>
                <NavLink to="/movies/language/english">English</NavLink>
              </li>
              <li>
                <NavLink to="/movies/language/korean">Korean</NavLink>
              </li>
              <li>
                <NavLink to="/movies/language/japanese">Japanese</NavLink>
              </li>
              <li>
                <NavLink to="/movies/language/hindi">Hindi</NavLink>
              </li>
              <li>
                <NavLink to="/movies/language/spanish">Spanish</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Categories</h4>
            <ul>
              <li>
                <NavLink to="/genre/action">Action</NavLink>
              </li>
              <li>
                <NavLink to="/genre/drama">Drama</NavLink>
              </li>
              <li>
                <NavLink to="/genre/comedy">Comedy</NavLink>
              </li>
              <li>
                <NavLink to="/genre/horror">Horror</NavLink>
              </li>
              <li>
                <NavLink to="/genre/romance">Romance</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>{new Date().getFullYear()}</span>{' '}
          <strong className="px-1 sitename">Reel7</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">Made with ❤️ for movie lovers</div>
      </div>
    </footer>
  );
}
