import React from "react"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row shadow w-100 rounded bg-white" style={{ maxWidth: "900px" }}>

        {/* LEFT COLUMN */}
        <div className="col-md-4 d-flex justify-content-center align-items-center p-4 flex-column bg-light">
          <img
            src="https://plus.unsplash.com/premium_vector-1726498072933-f6112c1b1396?q=80&w=1077&auto=format&fit=crop"
            alt="Login"
            className="img-fluid mb-3"
          />
          <h5 className="text-center fw-bold">Secure Login</h5>
          <p className="text-center text-muted">Enter your credentials to login.</p>
        </div>

        {/* CENTER COLUMN */}
        <div className="col-md-4 p-4">
          <h3 className="fw-bold text-center text-success mb-4">Login</h3>

          <form>
            <div className="mb-3">
              <label className="fw-bold mb-2">Full Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Full Name"
              />
            </div>

            <div className="mb-3">
              <label className="fw-bold mb-2">Password *</label>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="Enter Your Password"
              />
            </div>

            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <button type="submit" className="w-100 btn btn-success">
              Login
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-md-4 bg-light p-4 d-flex flex-column justify-content-center">
          <div className="text-center mb-3">
            <Link to="/forgot-password" className="text-success text-decoration-none fw-bold">
              Forgot Password?
            </Link>
          </div>

          <div className="text-center mb-3">
            <Link to="/register" className="text-success text-decoration-none fw-bold">
              Create New Account
            </Link>
          </div>

          <div className="text-center">
            <p className="small text-muted mb-0">&copy; 2025 ProManage</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login





