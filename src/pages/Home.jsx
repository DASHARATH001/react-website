import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container-fluid">
      <header
        className="d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?q=80&w=1198&auto=format&fit=crop')",
          height: "90vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: "white",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1,
          }}
        ></div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="py-lg-5 row">
            <div className="col-lg-8 col-md-10">
              <h1>Manage Project Easily – Promanage</h1>
              <p className="mb-4 lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <Link to="/register" className="btn btn-success me-2">
                Get Started
              </Link>
              <Link to="/about" className="btn btn-outline-light">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="py-5">
        <h2 className="text-center mb-4">Why Choose Us</h2>
        <div className="row">
          {["Quality", "Reliability", "Support"].map((item) => (
            <div className="col-md-4 mb-3" key={item}>
              <div className="card h-100 shadow-lg">
                <div className="card-body text-center">
                  <h5 className="card-title">{item}</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-success text-white py-5 text-center">
        <h2>Get Started Today!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/register" className="btn btn-light btn-lg">
          Register Now
        </Link>
      </section>
    </div>
  )
}

export default Home
