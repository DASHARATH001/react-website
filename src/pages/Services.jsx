import React from "react"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="p-5 position-relative text-white text-center"
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661405786707-607e804c351b?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
        }}
      >
        <div style={{
          position: "absolute",
          top: 0, left: 0, width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)"
        }}></div>
        <h1 className="fw-bold position-relative mt-5" style={{ zIndex: 2 }}>Our Services</h1>
      </section>

      {/* SERVICES CARDS */}
      <div className="container position-relative" style={{ marginTop: "-120px" }}>
        <div className="row justify-content-center">
          {[
            { icon: "bi-bicycle", title: "Workout" },
            { icon: "bi-people", title: "Community" },
            { icon: "bi-award", title: "Membership" },
            { icon: "bi-suit-spade", title: "Events" }
          ].map((service, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="card shadow-lg text-center p-4 rounded-4">
                <i className={`bi ${service.icon} fs-1 text-success`}></i>
                <h5 className="fw-bolder mt-3">{service.title}</h5>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <Link to="/" className="text-success fw-bold">MORE</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services


