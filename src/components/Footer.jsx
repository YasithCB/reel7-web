import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <NavLink to="/" className="logo d-flex align-items-center">
              <span className="sitename">Reel7</span>
            </NavLink>
            <div className="footer-contact pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email:</strong> <span>info@example.com</span>
              </p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="#">
                <i className="fas fa-x"></i>
              </a>
              <a href="#">
                <i className="fas fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fas fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fas fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms of service</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy policy</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>
                <NavLink to="/web-design">Web Design</NavLink>
              </li>
              <li>
                <NavLink to="/web-development">Web Development</NavLink>
              </li>
              <li>
                <NavLink to="/product-management">Product Management</NavLink>
              </li>
              <li>
                <NavLink to="/marketing">Marketing</NavLink>
              </li>
              <li>
                <NavLink to="/graphic-design">Graphic Design</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Hic solutasetp</h4>
            <ul>
              <li>
                <NavLink to="/molestiae">Molestiae accusamus iure</NavLink>
              </li>
              <li>
                <NavLink to="/excepturi">Excepturi dignissimos</NavLink>
              </li>
              <li>
                <NavLink to="/suscipit">Suscipit distinctio</NavLink>
              </li>
              <li>
                <NavLink to="/dilecta">Dilecta</NavLink>
              </li>
              <li>
                <NavLink to="/sit-quas">Sit quas consectetur</NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Nobis illum</h4>
            <ul>
              <li>
                <NavLink to="/ipsam">Ipsam</NavLink>
              </li>
              <li>
                <NavLink to="/laudantium">Laudantium dolorum</NavLink>
              </li>
              <li>
                <NavLink to="/dinera">Dinera</NavLink>
              </li>
              <li>
                <NavLink to="/trodelas">Trodelas</NavLink>
              </li>
              <li>
                <NavLink to="/flexo">Flexo</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Reel7</strong>{" "}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by{" "}
          <a href="https://bootstrapmade.com/" target="_blank" rel="noreferrer">
            BootstrapMade
          </a>
        </div>
      </div>
    </footer>
  );
}
