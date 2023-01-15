import React from 'react'
import Collection from "./Collection";
import productsService from '../services/productsService';


export default function RecentlyViewedProducts() {
    const [previouslyViewedProducts,setPreviouslyViewedProducts] = React.useState([])

    React.useEffect(() => {
      const productsIds = JSON.parse(localStorage.getItem("previouslyViewedProducts"))

        if (productsIds.length){   
           productsIds.map(async id =>{
           const response =await productsService.getProduct(id)
           
        })
    }
   
      
      }, []);
    
    return (
    <div>RecentlyViewedProducts</div>
    
  )
}
