import React from 'react'
import Collection from "./Collection";
import productsService from '../services/productsService';


export default function RecentlyViewedProducts() {
    const [previouslyViewedProducts, setPreviouslyViewedProducts] = React.useState([])
    const productsIds = JSON.parse(localStorage.getItem("previouslyViewedProducts")) //read product ids from the browser local storage

    
    React.useEffect(() => {
        if (productsIds !==null && productsIds.length>0) {
            productsIds.forEach(async id => {
                  const {data:product} = await productsService.getProduct(id)
                  setPreviouslyViewedProducts(products => [...products, product])
                });
              }
    }, [productsIds]);
       
    return previouslyViewedProducts.length>0
          ?<Collection productsList={previouslyViewedProducts.slice(0,5)} title="Recently Viewed" showLink={false}/>
          :null;
    return null
}