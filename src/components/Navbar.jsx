import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fw-bold  mx-4 mb-0">
      <div className="container-fluid">

        <NavLink className="navbar-brand fw-bold" to="/">
         <img src="https://img.freepik.com/premium-vector/monogram-letter-y-abstract-business_784584-3659.jpg" 
         alt="" srcset="" className='logo' />
        </NavLink>

        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">

            <li className="nav-item">
              <NavLink className="nav-link" to="/"> <i class="bi bi-house-door-fill"></i> Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about"><i class="bi bi-bookmark-fill"></i> About</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/service"><i class="bi bi-database-fill"></i> Service</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact"> <i class="bi bi-telephone-inbound-fill"></i> Contact</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/register"><i class="bi bi-r-circle-fill"></i> Register</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/login"> <i class="bi bi-tencent-qq"></i> Login</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
