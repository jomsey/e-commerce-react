import React from 'react'
import Carousel from './Carousel'

function Hero() {
  return (
    <div className="hero">
        <div className="hero-text">
        <h1>Buy Goods ,<br/><span>We Deliver To Your Doorstep</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ut cum deserunt consectetur laborum magnam tempora possimus perferendis nostrum nam!</p>
        </div>

        <Carousel/>
    </div>
  )
}

export default Hero