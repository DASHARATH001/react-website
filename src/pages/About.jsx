import React from "react"

const About = () => {
  return (
    <div className="container mt-5">
      {/* Section 1 */}
      <div className="row align-items-center">
        <div className="col-md-6 px-4">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop"
            className="img-fluid rounded-5"
            alt="About us"
          />
        </div>

        <div className="col-md-6 px-4">
          <h1>About Us</h1>
          <h4>Who We Are</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            neque, eum nihil vel libero quaerat exercitationem.
          </p>
          <button className="btn btn-outline-dark">Read More →</button>
        </div>
      </div>

      {/* Section 2 */}
      <section className="py-5">
        <div className="text-center mb-4">
          <h4 className="fw-bold">
            Manage Project with <span className="text-success">ProManage</span>
          </h4>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="row">
          {/* Card 1 */}
          <div className="col-md-6 my-4">
            <div className="bg-dark h-100 shadow-lg text-white p-4 rounded-5">
              <div className="d-flex justify-content-between">
                <h3 className="fw-bold">ProManage Essentials</h3>
                <span className="btn btn-outline-warning">Weekend</span>
              </div>
              <p className="mt-3 mb-1">28th December, Sunday</p>
              <p className="mb-1">11:00 AM – 2:00 PM</p>
              <p className="mb-4">Online</p>
              <button className="btn btn-outline-light">
                Enroll Now →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 my-4">
            <div className="h-100 shadow-lg p-4 rounded-5">
              <div className="d-flex justify-content-between">
                <h3 className="fw-bold">Advanced Project Planning</h3>
                <span className="btn btn-outline-dark">Weekend</span>
              </div>
              <p className="mt-3 mb-1">28th December, Sunday</p>
              <p className="mb-1">11:00 AM – 2:00 PM</p>
              <p className="mb-4">Online</p>
              <button className="btn btn-outline-success">
                Enroll Now →
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 my-4">
            <div className="h-100 shadow-lg p-4 rounded-5">
              <div className="d-flex justify-content-between">
                <h3 className="fw-bold">Customer Support</h3>
                <span className="btn btn-outline-dark">Weekend</span>
              </div>
              <p className="mt-3 mb-1">28th December, Sunday</p>
              <p className="mb-1">11:00 AM – 2:00 PM</p>
              <p className="mb-4">Online</p>
              <button className="btn btn-outline-success">
                Enroll Now →
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-6 my-4">
            <div className="h-100 bg-dark text-white shadow-lg p-4 rounded-5">
              <div className="d-flex justify-content-between">
                <h3 className="fw-bold">Team Collaboration Mastery</h3>
                <span className="btn btn-outline-warning">Weekend</span>
              </div>
              <p className="mt-3 mb-1">28th December, Sunday</p>
              <p className="mb-1">11:00 AM – 2:00 PM</p>
              <p className="mb-4">Online</p>
              <button className="btn btn-outline-light">
                Enroll Now →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About



