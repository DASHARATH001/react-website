import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fw-bold mx-4 mb-0">
      <div className="container-fluid">
        <NavLink className="navbar-brand fw-bold" to="/">
          <img
            src="https://img.freepik.com/premium-vector/monogram-letter-y-abstract-business_784584-3659.jpg"
            alt="Logo"
            className="logo"
          />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                <i className="bi bi-house-door-fill"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                <i className="bi bi-bookmark-fill"></i> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/services">
                <i className="bi bi-database-fill"></i> Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                <i className="bi bi-telephone-inbound-fill"></i> Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                <i className="bi bi-r-circle-fill"></i> Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                <i className="bi bi-tencent-qq"></i> Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar


