import React from 'react'
import Hero from '../components/Hero'
import ProductCategories from '../components/ProductCategoryContainer'

function Landing() {
  return (
    <div className="landing">
          <ProductCategories />
          <Hero/>   
      </div>
  )
}

export default Landing