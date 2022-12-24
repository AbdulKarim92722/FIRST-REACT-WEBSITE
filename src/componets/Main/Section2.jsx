import React from 'react'
import Image8 from './Image/Image8.jpg'
import Image9 from './Image/Image9.jpg'
import Image6 from './Image/Image6.png'
import Image3 from './Image/Image3.jpg'



function Section2() {
  return (
  <>
  <br />
  <br />
   <h2 className="section-heading text-uppercase d-flex justify-content-center">About Us</h2>
    <br/>
    <br/>
  <div className='container d-flex justify-content-between'>
    <div className="card" style={{width: "18rem"}}>
  <img src={Image8} className="card-img-top" alt="..."/>
  <div className="card-body">
    <br />
    <h3>FREE DELIVERY</h3>
    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt tempore, debitis cupiditate reiciendis unde corrupti.</p>
  </div>
</div>

<div className="card" style={{width: "18rem"}}>
  <img src={Image9} className="card-img-top" alt="..."/>
  <div className="card-body">
    <br />
    <h3>FRESH FOOD</h3>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, placeat ipsa quae pariatur fugit aliquid?</p>
  </div>
</div>

<div className="card" style={{width: "18rem "}}>
  <img src={Image6} className="card-img-top" alt="..."/>
  <div className="card-body">
    <br />
    <br />
    <h3>BEST QUALITY </h3>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut molestias magnam incidunt nobis odit exercitationem facilis reprehenderit obcaecati dolor dignissimos!</p>
  </div>
</div>

<div className="card" style={{width: "20rem"}}>
  <img src={Image3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h3>SPICY  RECIPES</h3>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia expedita amet ipsam nihil magnam voluptatum recusandae, delectus aliquid illo, possimus, optio iure.</p>
  </div>
</div>
    </div>
    </>
  )
}

export default Section2