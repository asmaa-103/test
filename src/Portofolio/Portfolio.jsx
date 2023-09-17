import React from 'react'

import img from '../assist/images/poert1 (1).png'
import image2 from '../assist/images/port2 (1).png'
import image3 from '../assist/images/port3.png'


export default function Portfolio() {





  return (
    <>

    <div className="head">
    <div className="main-heading text-center ">
      <h2 className='fs-1 fw-bolder' >PORTFOLIO COMPONENT</h2>
      <div className="line d-flex justify-content-center align-items-center">
        <div className="left-line mx-3"></div>
        <i class="fa-solid fa-star"></i>
        <div className="right-line mx-3"></div>
      </div>
    </div>
    </div>




    <div className="container">
      <div className="portofolio py-5">
        <div className="row g-5">
          <div className="col-lg-4 rounded-5">
          <div className="item">
           <img src={img} className='w-100' alt=""/>
          
            <div className="layer">
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 


          <div className="col-lg-4 rounded-5">
          <div className="item">
          <img src={image2} className='w-100' alt=''/>
            <div className="layer">
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 

          <div className="col-lg-4 rounded-5">
          <div className="item">
          <img src={image3} className='w-100' alt="" srcset=""/>
            <div className="layer">
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 

          <div className="col-lg-4 rounded-5">
          <div className="item">
          <img src={img} className='w-100' alt="" srcset="" />
            <div className="layer">
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 

          <div className="col-lg-4 rounded-5">
          <div className="item">
          <img src={image2}className='w-100' alt="" />
            <div className="layer"  >
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 

          <div className="col-lg-4 rounded-5">
          <div className="item">
          <img src={image3} className='w-100' alt="" srcset="" />
            <div className="layer">
            <i class="fa-solid fa-plus"></i>
            </div>
          </div>
          </div> 
         



       



</div>
      
</div>
</div>
     

    </>
  )
}


