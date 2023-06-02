import "swiper/css";
import "./Collection.css";
import "swiper/css/navigation";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { ShopContext } from "../shop-context/ShopState";
import { useContext,useRef,useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";

 
function Collection({ title, productsList,showLink=true}) {
        const collectionContainer = useRef()
        const [slidesPerPage,setSlidePerPage] =useState(2)
        const {productCardContainerWidth,setProducts,
               setCategory,setProductsResultsName ,setProductsCount} = useContext(ShopContext)
        const navigate = useNavigate()

        const handleSeeAllClick=()=>{
            setProductsResultsName("collection")
            navigate("/products")
            setCategory(title)
            setProducts(productsList)
            setProductsCount(productsList.length)

        }

        useEffect(() => {
                    // calculate slide items number depending on th collections container width
                    const collectionContainerWidth = collectionContainer.current && collectionContainer.current.clientWidth
                    setSlidePerPage( Math.floor(collectionContainerWidth/productCardContainerWidth))
        
        }, [slidesPerPage])

        
        return (
            <div className="collection"  ref={collectionContainer} >
                <div className="collection-top">
                    <h3 className="title">{title}</h3>
                    {showLink &&  <h5 onClick={handleSeeAllClick}>SEE ALL</h5>}
                </div>

                <Swiper  slidesPerView={slidesPerPage} >
                    <div className="collection-container" >
                        {productsList.map((product) => (
                        <SwiperSlide   key={product.id}>
                            <ProductCard product={product} key={product.id}/>
                        </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        );
}

export default Collection;
