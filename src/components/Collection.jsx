import "./Collection.css";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { ShopContext } from "../shop-context/ShopState";
import { useContext,useRef,useEffect,useState} from 'react';
import { Navigation } from 'swiper';


 
function Collection({ title, productsList,showLink=true }) {
        const collectionContainer = useRef()
        const {productCardContainerWidth} = useContext(ShopContext)
        const [slidesPerPage,setSlidePerPage] =useState(2)

        
        useEffect(() => {
                    // calculate slide items number depending on th collections container width
                    window.addEventListener("resize",()=>{
                    const collectionContainerWidth = collectionContainer.current && collectionContainer.current.clientWidth
                    setSlidePerPage( Math.floor(collectionContainerWidth/productCardContainerWidth))
        })
        
        return () => {
        
        }
        }, [])
        
        return (
            <div className="collection"  ref={collectionContainer } >
                <div className="collection-top">
                    <h3 className="title">{title}</h3>
                    {showLink &&  <h5>SEE ALL</h5>}
                </div>

                <Swiper  
                    slidesPerView={slidesPerPage}
                    modules={Navigation}
                >
                <div className="collection-container" >
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
