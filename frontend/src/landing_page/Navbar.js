import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      className="navbar border-bottom sticky-top pb-3 pt-3"
      style={{ backgroundColor: '#F8F8FD' }}
    >
      <div className="container">
        <div className="row w-100 align-items-center">

          {/* Left Column - Logo */}
          <div className="col-6 d-flex">
            <Link to="/" style={{ marginLeft: '100px' }}>
              <img
                src="media/images/logo.svg"
                alt="Logo"
                style={{ maxWidth: '28%' }}
              />
            </Link>
          </div>

          {/* Right Column - Links */}
          <div className="col-6 d-flex justify-content-end">
            <ul
              className="navbar-nav d-flex flex-row mb-0 fw-medium"
              style={{ gap: '50px', fontSize: '1.10rem', marginRight: "100px" }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

              {/* Bars icon for dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-bars"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/">Coming soon</Link></li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
