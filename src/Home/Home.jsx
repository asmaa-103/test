import React from 'react'
import logo from '../assist/images/avataaars (1).svg'
export default function Home() {
  return (
    <>
    <div className="Home">
      <div className="container">
        <div className="items text-center">
        
          <img src={logo} className='mb-5' alt=''></img>

          <div className="Homee pb-5">
    <div className="main-About text-center ">
      <h2 className='fs-1 fw-bolder text-white' >START FRAMEWORK</h2>
      <div className="line d-flex justify-content-center align-items-center">
        <div className="left-line mx-3"></div>
        <i class="fa-solid fa-star text-white"></i>
        <div className="right-line mx-3"></div>
      </div>
      <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

    </div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
