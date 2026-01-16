import React from 'react'

const Home = () => {
  return (
   <>
   <div className="container-fluid  ">
    <header className="  d-flex justify-content-center align-items-center text-center"
    style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1661347859297-859b8ae1d7c5?q=80&w=1198&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      height:"90vh",
      backgroundSize:"cover",
      backgroundPosition:"center",
      position:"relative",
      color:"white"
    }}
    >
      <div style={{position:"absolute",
        top:0,
        left:0,
        height:"100%",
        width:"100%",
        backgroundColor:"rgba(0,0,0,0.6)",
        zIndex: 1
        }} >
      </div>
      <div className="container position-relative" style={{zIndex: 2 , color:"white"}}>
        <div className='py-lg-5 row'>
          <div className='col-lg-8 col-md-10'>
            <h1>Manage Project Ease -Promanage</h1>
            <p className='mb-4 lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione 
              voluptatibus saepe reprehenderit aperiam quasi quod. Earum magni voluptates nulla
               minima iure natus veniam?</p>
               <a href="" className='btn btn-success me-2 '>Get Strated</a>
               <a href=" " className='btn btn-outline-light'>Lrean More</a>
          </div>
        </div>
      </div>
    </header>

    {/* section 2 */}
    <div className='py-5'>
      <h2 className='text-center mb-4'>Why Choose us</h2>
      <div className='row'>
        <div className="col-md-4 mb-3 ">
          <div className=" card h-100">
            <div className="card-body shadow-lg">
              <h5 className='text-center  card-title'>Quality</h5>
              <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet perspiciatis iusto.</p>
            </div>
          </div>
        </div>

         <div className="col-md-4 mb-3">
          <div className=" card h-100">
            <div className="card-body shadow-lg">
              <h5 className='text-center  card-title'>reliability</h5>
              <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet perspiciatis iusto.</p>
            </div>
          </div>
        </div>

         <div className="col-md-4 mb-3">
          <div className=" card h-100">
            <div className="card-body shadow-lg">
              <h5 className='text-center  card-title'>Support</h5>
              <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus amet perspiciatis iusto.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* section 3 */}

    <section className="bg-success text-white py-5 ">
      <div className='text-center'>
        <h2>Get Strated Today !</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, tempora.</p>
        <a href="/register" className='btn btn-light btn-lg'>Register Now</a>
      </div>
    </section>
   </div>
   </>
  )
}

export default Home

