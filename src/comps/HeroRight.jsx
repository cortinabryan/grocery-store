import React from 'react'
import Butchering from "../images/butchering.png"

const HeroRight = () => {
  return (
    <div className="hero min-h-fit bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={Butchering} className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Quality you can trust!</h1>
        <p className="py-6">Joe'Rogan approved grass-fed non-gmo organic farm-raised cage-free elk-meat</p>
        <button className="btn btn-primary">I want somma that</button>
      </div>
    </div>
  </div>
  )
}

export default HeroRight