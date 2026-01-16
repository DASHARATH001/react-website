import React from "react"

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* LEFT TEXT */}
        <div className="col-lg-7 mb-4">
          <h2 className="fw-bold">
            Manage Projects With Ease - <span className="text-success">ProManage</span>
          </h2>
          <p className="my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio totam quae placeat, qui similique voluptas earum unde at assumenda!
          </p>
          <p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur ratione eius alias numquam aliquam perspiciatis exercitationem quos nesciunt repellendus veritatis!
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam optio praesentium repellat, dolores maiores voluptatum aspernatur repudiandae. Nam, impedit tempora!
          </p>
          <p className="my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum accusamus facere incidunt doloremque aliquid laboriosam perspiciatis labore eos excepturi ratione!
          </p>
          <div className="d-flex gap-4 flex-wrap">
            <button type="button" className="btn btn-outline-success px-4 py-2">Learn More</button>
            <button type="button" className="btn btn-outline-success px-4 py-2">Start Now</button>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="col-lg-5">
          <div className="border rounded shadow-sm p-3">
            <h2 className="text-center my-2">Register Now</h2>
            <form className="my-4">
              <div className="mb-3">
                <label className="fw-bold mb-2">Full Name</label>
                <input type="text" className="form-control form-control-lg" placeholder="Enter Your Full Name" />
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2">Email</label>
                <input type="email" className="form-control form-control-lg" placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label className="fw-bold mb-2">Select Plan</label>
                <select className="form-select">
                  <option value="">Free Plan</option>
                  <option value="">Pro Plan</option>
                  <option value="">Extra Plan</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success w-100 py-2 fs-5">Register Now</button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="text-center my-5">
        <h3 className="fw-bold">Unlock Your Project Power</h3>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio architecto molestiae mai
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="row g-4">
        {[
          { title: "Smart Planning", img: "https://plus.unsplash.com/premium_photo-1745056197488-438b1931fa5d?q=80&w=1170&auto=format&fit=crop" },
          { title: "AI Support", img: "https://plus.unsplash.com/premium_photo-1726079246917-46f2b37f7e9e?q=80&w=1170&auto=format&fit=crop" },
          { title: "Collaboration", img: "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.webp?a=1&b=1&s=612x612&w=0&k=20&c=QGR4lIXS1P30qiZnhfq5cKMKLba1N3QGjWT1e012cYU=" },
          { title: "Prompt", img: "https://plus.unsplash.com/premium_photo-1727535680769-64038eccbc71?q=80&w=1170&auto=format&fit=crop" },
        ].map((card, index) => (
          <div className="col-md-3" key={index}>
            <div className="card h-100 p-2 shadow-lg">
              <img src={card.img} alt={card.title} className="img-fluid card-img-top" />
              <div className="card-body">
                <h6 className="fw-bold mb-1">{card.title}</h6>
                <p className="text-muted mb-0">Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Register
