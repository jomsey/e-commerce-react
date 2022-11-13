import "./Filters.css";
export default function Filters() {
  return (
    <div className="filters-container">
      <h3>Filters</h3>
      <form method="get" >
        <h5>Price Range</h5>
        <div className='slider-filters'>
        
    
         <div className="num-range"> <input type="number" name="min"/> to 
          <input type="number" name="min"/></div>
          <input type="range" name="max-price" className="slider" max={50000}  />
        </div>
       
        <h5>Discount</h5>
        <div className="discout-filters">
        <div className="discount"> <input type="radio" name="l-20" /><small> greater than 20</small></div>
        <div className="discount"> <input type="radio" name="l-20" /><small> greater than 40</small></div>
        <div className="discount"> <input type="radio" name="l-60" /><small> greater than 60</small></div>
        <div className="discount"> <input type="radio" name="l-20" /><small> greater than 80</small></div>

        </div>
         <button type="submit">Apply</button>
      </form>
    </div>
  );
}
