import "./Filters.css";
import {useState,useContext} from "react"
import { ShopContext } from "../shop-context/ShopState";
import productsService from "../services/productsService";


export default function Filters() {
  const {setProducts,
        setProductsCount,
        setProductsResultsName,
        priceRange,setPriceRange} = useContext(ShopContext)

  const handleFiltering=async(e)=>{
        e.preventDefault()
        try {
          const response = await productsService.filterProductsByPrice( priceRange.max, priceRange.min)
          const{results,count}=response.data
          setProducts(results)
          setProductsCount(count)
        } catch (error) {
          console.log(error)
        }
  }

const handleChange = (e)=>{
      const name = e.target.name
      const value = e.target.value
      setPriceRange(data=>({...data,[name]:value}))
}


return (
    <div className="filters-container">
      <h3>Filters</h3>
      <form onSubmit={handleFiltering}>
        <h5>Price Range</h5>
        <div className='slider-filters'>
        
         <div className="num-range"> <input type="number" name="min"   onChange={handleChange}/> to 
          <input type="number" name="max"  onChange={handleChange}/></div>
          <input type="range" name="max-price" className="slider" max={50000}   onChange={handleChange} />
        </div>
       
        {/* <h5>Discount</h5>
        <div className="discout-filters">
        <div className="discount"> <input type="radio" name="l-20"  onChange={handleChange} /><small> greater than 20</small></div>
        <div className="discount"> <input type="radio" name="l-20"  onChange={handleChange} /><small> greater than 40</small></div>
        <div className="discount"> <input type="radio" name="l-60"  onChange={handleChange} /><small> greater than 60</small></div>
        <div className="discount"> <input type="radio" name="l-20"  onChange={handleChange}/><small> greater than 80</small></div>
        </div> */}
         <button type="submit">Apply</button>
      </form>
    </div>
  );
}
