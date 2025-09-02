import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header id="header" className="header position-relative">
      <div className="container-fluid container-xl position-relative">
        <div className="top-row d-flex align-items-center justify-content-between">
          <NavLink to="/" className="logo d-flex align-items-end">
            {/* <img src="assets/img/logo.webp" alt="" /> */}
            <h1 className="sitename">K9ORA</h1>
            <span>.</span>
          </NavLink>

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

            <form className="search-form ms-4">
              <input type="text" placeholder="Search..." className="form-control" />
              <button type="submit" className="btn">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

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
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/category">Category</NavLink>
              </li>
              <li>
                <NavLink to="/blog-details">Blog Details</NavLink>
              </li>
              <li>
                <NavLink to="/author-profile">Author Profile</NavLink>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category">Category</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog-details">Blog Details</NavLink>
                  </li>
                  <li>
                    <NavLink to="/author-profile">Author Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/search-results">Search Results</NavLink>
                  </li>
                  <li>
                    <NavLink to="/404">404 Not Found Page</NavLink>
                  </li>

                  <li className="dropdown">
                    <a href="#">
                      <span>Deep Dropdown</span>{" "}
                      <i className="bi bi-chevron-down toggle-dropdown"></i>
                    </a>
                    <ul>
                      <li>
                        <NavLink to="/deep1">Deep Dropdown 1</NavLink>
                      </li>
                      <li>
                        <NavLink to="/deep2">Deep Dropdown 2</NavLink>
                      </li>
                      <li>
                        <NavLink to="/deep3">Deep Dropdown 3</NavLink>
                      </li>
                      <li>
                        <NavLink to="/deep4">Deep Dropdown 4</NavLink>
                      </li>
                      <li>
                        <NavLink to="/deep5">Deep Dropdown 5</NavLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </div>
    </header>
  );
}
