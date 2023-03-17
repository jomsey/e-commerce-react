import "./ProductDetails.css";
import RatingRack from "./../ui/RatingRack";
import Collection from "../components/Collection";
import TopBar from "../components/TopBar";
import { useContext,useState,useEffect } from 'react';
import { ShopContext } from "../shop-context/ShopState";
import {useParams} from "react-router-dom"
import productsService from '../services/productsService';
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import Spinner from './../components/Spinner';
import cartService from "../services/cartService";
import ProductDetailsPlaceholder from "../components/ProductDetailsPlaceholder";


function ProductDetails(){
        const {id:productId}= useParams()
        const [product,setProduct] = useState({})
        const  formatToCurrencyFormat= Intl.NumberFormat()
        const [addingToCart,setAddingToCart] = useState(false)
        const {cartProducts,setCartProducts,products}= useContext(ShopContext)
        const  [loadingProduct,setLoadingProduct] = useState(true)

        
        useEffect(()=>{
          async function getProduct(){
                try {
                    const {data,status} = await productsService.getProduct(productId)
                    if (status === 200){
                      setProduct(data)
                      setLoadingProduct(false)
                    }

                } catch (error) {}
          }

          getProduct()

        },[productId])
      

        const AddProductToCart = async (product) => {
              const cartId = localStorage.getItem("cartId")
              setAddingToCart(true) //show progress spinner

              if (cartId === null){
                  try {
                    const response = await cartService.createCart()
                    localStorage.setItem("cartId",response.data.cart_uuid)
                    } catch (error) {}
              }
                  
              try {
                  const {status} = await cartService.addToCart({"product":product.id},cartId)
                  if (status === 201){
                    setCartProducts([product,...cartProducts])
                    setAddingToCart(false)
                }
                setAddingToCart(false)
                  
              } catch (error) {
                setAddingToCart(false)
              }
        };

        const AddProductToWishList = (product) => {
          console.log("added to wishlist");
        };

        return (
          <>
            <TopBar showToggler={true} />

            <div className="product-details-page">
            {
              loadingProduct?
              <ProductDetailsPlaceholder/>:
              <>
              <div className="details">
                <div className="image">
                  <img
                    src={product.image_url}
                    alt=""
                  />
                </div>

                <div className="info">
                  <small>{product.category.name}</small>
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
                  {
                     product.description !== undefined &&
                     product.description.length >600 ? (product.description).slice(0,600)+" .....":product.description
                  }
                  </p>
                  <RatingRack rate={4} />
                  <div className="buttons">
                    <button onClick={()=>AddProductToCart(product)} className="add-to-cart btn">
                     {addingToCart?<>Adding To Cart  <Spinner/></>:"Add To Cart" }
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
              </>
            }
            </div>
              <RecentlyViewedProducts/>

          
          </>
        );
};

export default ProductDetails;
