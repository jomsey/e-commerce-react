import "./Collection.css";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ShopContext } from "../shop-context/ShopState";
import { useContext } from 'react';
import { Navigation } from 'swiper';


 
function Collection({ title, productsList,showLink=true }) {
    const {isMobilePhone} = useContext(ShopContext)
    const slidesNumberOnSmallScreens = 2
    const slidesNumberBigScreens = 5


    return (
        <div className="collection">
            <div className="collection-top">
                <h3 className="title">{title}</h3>
                 {showLink &&  <h5>SEE ALL</h5>}
            </div>

            <Swiper  
                slidesPerView={isMobilePhone?slidesNumberOnSmallScreens:slidesNumberBigScreens}
                modules={Navigation}
             >
            <div className="collection-container">
                {productsList.map((product) => (
                   <SwiperSlide   key={product.id}>
                     <ProductCard 
                        product={product}
                        key={product.id}/>
                   </SwiperSlide>
                ))}
            </div>
            </Swiper>
        </div>
    );
}

export default Collection;
