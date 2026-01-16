import React from 'react'

const About = () => {
  return (
    <>
      <div className="container mt-5 ">
        <div className="row align-items-center">
          <div className="col-md-6 px-4 ">
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="img-fluid rounded-5" alt="..." />
          </div>
          <div className="col-md-6 px-4">
            <h1>About us</h1>
            <h4>who We are</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis neque, eum nihil vel libero, quaerat exercitationem fugiat obcaecati placeat vero soluta laudantium minima
              maxime ipsum pariatur veniam. Et sed possimus minima sequi ab tempora!</p>
            <button type="button" className='btn btn-outline-dark '>Read More →</button>
          </div>
        </div>

        <section className='py-5'>
          <div className='container '>
            <h4 className='fw-bold text-center'>Manage Project with
              <span className='text-success'>ProManage</span></h4>
            <p className='text-muted text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam!</p>
          </div>
          <div className="row ">
            <div className="col-md-6 my-4">
              <div className='bg-dark h-100  shadow-lg text-white p-4 rounded-5 '>
                <div className=' d-flex justify-content-between'>
                  <h3 className='fw-bold'>ProManage Essentials</h3>
                  <span className='btn btn-outline-warning '>weekend</span>
                </div>
                <p className='mt-3 mb-1'>28th December,Sunday</p>
                <p className='mb-1'>11:00 AM to 2:00 PM</p>
                <p className='mb-4'>Online</p>
                <button type="button" className='btn btn-outline-light '>Enroll Now →</button>
              </div>
            </div>
            <div className='col-md-6 my-4'>
              <div className='h-100  shadow-lg p-4 rounded-5 '>
                <div className=' d-flex justify-content-between'>
                  <h3 className='fw-bold '>Advanced Project Planing</h3>
                  <span className='btn btn-outline-dark '>weekend</span>
                </div>
                <p className='mt-3 mb-1'>28th December,Sunday</p>
                <p className='mb-1'>11:00 AM to 2:00 PM</p>
                <p className='mb-4'>Online</p>
                <button type="button" className='btn btn-outline-success '>Enroll Now →</button>
              </div>

            </div>
            <div className="row">
                <div className='col-md-6 my-4'>
              <div className='h-100  shadow-lg p-4 rounded-5 '>
                <div className=' d-flex justify-content-between'>
                  <h3 className='fw-bold '>Customer Support</h3>
                  <span className='btn btn-outline-dark '>weekend</span>
                </div>
                <p className='mt-3 mb-1'>28th December,Sunday</p>
                <p className='mb-1'>11:00 AM to 2:00 PM</p>
                <p className='mb-4'>Online</p>
                <button type="button" className='btn btn-outline-success '>Enroll Now →</button>
              </div>

            </div>
              <div className='col-md-6 my-4'>
              <div className='h-100  bg-dark text-white shadow-lg p-4 rounded-5 '>
                <div className=' d-flex justify-content-between'>
                  <h3 className='fw-bold '>Team collaboration Mastery</h3>
                  <span className='btn btn-outline-warning '>weekend</span>
                </div>
                <p className='mt-3 mb-1'>28th December,Sunday</p>
                <p className='mb-1'>11:00 AM to 2:00 PM</p>
                <p className='mb-4'>Online</p>
                <button type="button" className='btn btn-outline-light '>Enroll Now →</button>
              </div>

            </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About