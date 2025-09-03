import { NavLink } from 'react-router-dom';
import '../assets/css/Header.css';
import SearchForm from './SearchForm';

export default function Header() {
  return (
    <header id="header" className="header position-relative">
      <div className="container-fluid container-xl position-relative">
        <div className="top-row d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-end">
            <h1 className="sitename">REel7</h1>
            <span>.</span>
          </NavLink>

          {/*navbar middle*/}
          <div className="nav-wrap">
            <div className="container d-flex justify-content-center position-relative">
              <nav id="navmenu" className="navmenu">
                <ul>
                  <li>
                    <NavLink to="/" end>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/movies">Movies</NavLink>
                  </li>
                  <li>
                    <NavLink to="/tv">TV Series</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
              </nav>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="social-links">
              <a href="#" className="facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#" className="instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>

            <SearchForm />
          </div>
        </div>

        {/* orange strip - bottom */}
        <div className="nav-bottom-strip">
          <div className="container d-flex justify-content-center align-items-center h-100">
            <nav id="navmenu" className="navmenu text-white">
              <ul>
                <li>
                  <NavLink to="/movies">Trending</NavLink>
                </li>
                <li>
                  <NavLink to="/tv">Latest</NavLink>
                </li>
                <li>
                  <NavLink to="/tv">English</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Hindi</NavLink>
                </li>
                <li>
                  <NavLink to="/movies">Tamil</NavLink>
                </li>
                <li>
                  <NavLink to="/tv">Malayalam</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Telugu</NavLink>
                </li>
                <li>
                  <NavLink to="/movies">Korean</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Old</NavLink>
                </li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
