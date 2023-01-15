import "./ProductDetails.css";
import RatingRack from "./../ui/RatingRack";
import Collection from "../components/Collection";
import TopBar from "../components/TopBar";
import { useContext,useState,useEffect } from 'react';
import { ShopContext } from "../shop-context/ShopState";
import {useParams} from "react-router-dom"
import { toast} from 'react-toastify';
import cartService from "../services/cartService";
import productsService from '../services/productsService';
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";


const ProductDetails = () => {
  const {id}= useParams()
  const [product,setProduct] = useState({})
  const  formatToCurrencyFormat= Intl.NumberFormat()
  const {cartProducts,setCartProducts,products}= useContext(ShopContext)
  //   parse HTML safely
  const parser = new DOMParser(); 
  
  
  useEffect(()=>{
    async function getProduct(){
      
      try {
        const {data} = await productsService.getProduct(id)
        setProduct(data)
      } catch (error) {}
    }
   getProduct()

  },[])
 

  const AddProductToCart = async (product) => {
    const cartId = localStorage.getItem("cartId")

    toast("Item added to cart !");
    setCartProducts([product,...cartProducts])
        
        if (cartId === null){
             try {
               const response = await cartService.createCart()
               localStorage.setItem("cartId",response.data.cart_uuid)
              } catch (error) {}
            }
            
            try {
              await cartService.addToCart({"product":product.id},cartId)
             
        } catch (error) {}
  };

  const AddProductToWishList = (product) => {
    console.log("added to wishlist");
    toast("Item added to wishlist !");
  };

  return (
    <>
      <TopBar showToggler={true} />

      <div className="product-details-page">
        <div className="details">
          <div className="image">
            <img
              src={product.image_url}
              alt=""
            />
          </div>

          <div className="info">
            <small>category</small>
            <h3 className="product-name">
            {product.name}
            </h3>
            <h4 className="price">
              <small>
                <span>{product.discount}%</span>
                <br />
                <strike> {formatToCurrencyFormat.format(product.price)} KES</strike>
              </small>{formatToCurrencyFormat.format(product.discounted_price)}
            KES
            </h4>
            <p className="description">
             {product.description}
            </p>
            <RatingRack rate={4} />
            <div className="buttons">
              <button onClick={()=>AddProductToCart(product)} className="add-to-cart btn">
                Add To Cart
              </button>
              <button
                onClick={()=>AddProductToWishList("product")}
                className="add-to-wishlist btn"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        <Collection title={"You May Also Like"} productsList={products} />
        <RecentlyViewedProducts/>
      </div>

     
    </>
  );
};

export default ProductDetails;
