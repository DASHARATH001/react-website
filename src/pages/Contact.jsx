


import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact-wapper d-flex justify-content-center align-items-center text-center">
      <div className="overlay">
        <div className="content position-relative">
          <h1 className=' text-white text-center my-4 fw-bold'>Contact Us</h1>
          <div className="from-box d-flex align-items-center rounded-pill p-2 gap-2 mx-auto bg-white shadow">
            <input type="text" className='form-control rounded-pill border-0  ' placeholder='Enter Your name' />
             <input type="email" className='form-control rounded-pill border-0' placeholder='Enter Your Email' />
             <button type="submit" className='btn btn-outline-dark rounded-pill px-4 fw-bold'>Submit</button>
          </div>
          <div className="container mt-4">
            <div className="row   justify-content-center">
              <div className="col-md-4 mb-2 d-flex justify-content-center">
                <div className='text-start bg-white text-dark rounded-3 text-center py-3 shadow-lg'
                 style={{width:"280px",height:"120px"}}>
                  <h5 className='fw-bold'>📞 Call us</h5>
                  <p className='mb-1'> 1 (456) 456-651</p>
                  <p className='mb-1'> 1 (456) 564-651</p>
                </div>
              </div>
               <div className="col-md-4 mb-2 d-flex justify-content-center">
                <div className='text-start bg-white text-dark rounded-3 text-center py-3 shadow-lg'
                 style={{width:"280px",height:"120px"}}>
                  <h5 className='fw-bold'>📍 Location</h5>
                  <p className='mb-1'>Old City, Raipur, Khadia,</p>
                  <p className='mb-1'>Ahmedabad, Gujarat 380001</p>
              </div>
            </div>
             <div className="col-md-4 d-flex justify-content-center">
                <div className='text-start bg-white text-dark rounded-3 text-center py-3 shadow-lg'
                 style={{width:"280px",height:"120px"}}>
                  <h5 className='fw-bold'>⏰ Hours</h5>
                  <p className='mb-1'>Mon-Fri : 11:00 am to 3:00pm</p>
                  <p className='mb-1'>Sat-Sun : 12:00 pm to 2:00 pm</p>
              </div>
            </div>

            
          </div>
        </div>
      </div>
      
    </div>
    </div>
    </>
  )
}

export default Contact