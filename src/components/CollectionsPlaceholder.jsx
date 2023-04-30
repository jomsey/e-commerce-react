import "./CollectionsPlaceholder.css";
import ProductPlaceholderCard from "./ProductPlaceholderCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ShopContext } from "../shop-context/ShopState";
import { useContext } from 'react';


const CollectionsPlaceholder = () => {
    const {isMobilePhone} = useContext(ShopContext)
    const slidesNumberOnSmallScreens = 2
    const slidesNumberBigScreens = 5

    return (
        <div className="collection collection-placeholder">
            <div className="collection-top">
                <span className="title block bg-place"></span>
                <span className="collection-link block bg-place"></span>
            </div>
            <Swiper  
                slidesPerView={isMobilePhone?slidesNumberOnSmallScreens:slidesNumberBigScreens}
                modules={Navigation}
             >
            <div className="collection-container">
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
               <SwiperSlide>  <ProductPlaceholderCard/></SwiperSlide>
            </div>
            </Swiper>
      </div>
    );
}

export default CollectionsPlaceholder;
