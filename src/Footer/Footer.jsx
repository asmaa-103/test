import React from 'react'

export default function Footer() {
  return (
    <>
     <div className="footeer text-white ">
     <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-5 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>

            <div className="col-lg-4 mb-5 text-center">
                <h3>AROUND THE WEB</h3>
             <div className=' social '>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-solid fa-globe"></i>
             </div>
            </div>


            <div className="col-lg-4 mb-5 text-center">
                <h3>AROUND THE WEB</h3>
                <p>Freelance is a free to use, licensed Bootstrap<br></br><span className='d-flex  justify-content-center'>theme created by Route</span></p>
            </div>
        </div>


      
      </div>
     </div>
<div className="final    py-3">
<div className="container">
<div className="row">
        <div className="col-lg-12">
            <p className='text-center'>Copyright © Your Website 2021</p>
        </div>
        </div>
</div>
</div>

 
    </>
  )
}
