import React from 'react'
import Image1 from './Image/Image1.jpg'
import Image2 from './Image/Image2.jpg'
import Image3 from './Image/Image3.jpg'


function Section1() {
  return (
    <>
     <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height :'90vh' }}src={Image1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height :'90vh' }} src={Image2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height :'90vh' }} src={Image3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Section1