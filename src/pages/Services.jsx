import React from 'react'


const Services = () => {
  return (
    <>
      <section className='p-5 position-relative text-white text-center'
        style={{
          backgroundImage: "url('https://plus.unsplash.com/premium_photo-1661405786707-607e804c351b?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "450px",
          fillRule: "brightness(60%)"
        }} >
        <h1 className='fw-bold text-center mt-5'>Our Services</h1>
      </section>

      <div className="container position-relative" style={{marginTop:"-120px"}}>
        <div className="row justify-content-center">
          <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-lg text-center p-4 rounded-4">
               <i class="bi bi-bicycle fs-1 text-success s"></i>
              <h5 className='fw-bolder '>WorkOUT</h5>
              <p className='text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className='text-success fw-bold'>MORE</a>
            </div>
          </div>

           <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-lg text-center p-4 rounded-4">
               <i class="bi bi-people fs-1 text-success s"></i>
              <h5 className='fw-bolder '>Community</h5>
              <p className='text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className='text-success fw-bold'>MORE</a>
            </div>
          </div>

           <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-lg text-center p-4 rounded-4">
               <i class="bi bi-award fs-1 text-success s"></i>
              <h5 className='fw-bolder '>Membership</h5>
              <p className='text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className='text-success fw-bold'>MORE</a>
            </div>
          </div>

           <div className="col-md-3 col-sm-6 mb-4">
            <div className="card shadow-lg text-center p-4 rounded-4">
               <i class="bi bi-suit-spade fs-1 text-success s"></i>
              <h5 className='fw-bolder '>Evenets</h5>
              <p className='text-muted'>Lorem ipsum dolor sit amet consectetur.</p>
              <a href="" className='text-success fw-bold'>MORE</a>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Services