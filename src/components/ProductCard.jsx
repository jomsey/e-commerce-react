import "./ProductCard.css";
import Icon from "../ui/Icon";
import {useContext,useState,useRef} from "react"
import { useNavigate } from "react-router-dom";
import cartService from "../services/cartService";
import { ShopContext} from "../shop-context/ShopState";
import Spinner from "./Spinner";


function ProductCard({product}) {;
         const productCardContainer = useRef()
         const navigate = useNavigate();
         const [addingToCart,setAddingToCart] = useState(false)
         const  formatToCurrencyFormat= Intl.NumberFormat();
         const {cartProducts,setCartProducts,setAlertMessage,setProductCardContainerWidth} = useContext(ShopContext);

         setProductCardContainerWidth(productCardContainer.current && productCardContainer.current.clientWidth)
       
         
         const handleProductDetailClick=(product_id)=>{
               navigate(`/products/${product_id}`)
               saveViewedProduct(product_id)
         }


         const AddItemToCart = async(product_id)=>{
              const productAlreadyInCart = cartProducts.find(({product})=>product.id === product_id);
              const cartId = localStorage.getItem("cartId")  
                  
              setAddingToCart(true) //display loader
                 
              try {
                   if (cartId !== null){
                        if (!productAlreadyInCart){
                            
                            const  {status} = await cartService.addToCart({"product":product_id},cartId)
    
                            if (status === 201){
                                setCartProducts([product,...cartProducts])
                                setAddingToCart(false)
                                setAlertMessage({message:"Product successfully added  to cart!"})

                            }
                            setAddingToCart(false)
                      }
                      else{ 
                            //increment product count in cart by 1                        
                            let {product_uuid,product_count} = productAlreadyInCart 
                            const newCount = product_count+1
                            const {status} = await cartService.updateCart(cartId,product_uuid,{product_count:newCount})

                            if (status === 200){
                                  setCartProducts([{...productAlreadyInCart,product_count:newCount},...cartProducts])
                                  setAddingToCart(false)
                                  setAlertMessage({message:"Product successfully added  to cart!"})
                            }

                      }
                  }
                     
               } catch (error) {
                   setAddingToCart(false)
                   setAlertMessage({message:"Oops , Couldn't Add Product !",type:"error"})

               }
       }

       function addProductToWishList() {
           setAlertMessage({message:"Saving Functionality Not Yet Implemented",type:"info"})
       }

       
       return (
       
           <div className="product-card" ref={productCardContainer}>
             {addingToCart && 
                 <div className="add-to-cart-processing">
                   <Spinner/>
                 </div>
             }
             <div className="product-image">
               <img src={product.image_url} alt={product.name} />

             </div>
             <div className="container">
               <span className="product-name">
                 {product.name.length > 22 ? `${product.name.toLowerCase().slice(0,22)}...` : product.name}
               </span>

               <small className="product-price">
                 <strong>
                   {product.discount > 0 && <strike>{formatToCurrencyFormat.format(Math.floor(product.price))} KES</strike>} {formatToCurrencyFormat.format(Math.floor(product.discounted_price))} KES
                 </strong>
               </small>

               <div className="buttons">
                 <span onClick={()=>handleProductDetailClick(product.id)} className="detail-btn button-overlay">DETAILS</span>
                 <div className="add-btns">
                   <Icon
                     extra={"wish-icon"}
                     iconName={"heart"}
                     onIconClick={() => addProductToWishList()}
                   />
                   <Icon
                     extra={"cart-icon"}
                     iconName={"cart-plus"}
                     onIconClick={()=>AddItemToCart(product.id)}
                   />
                 </div>
               </div>
             </div>
             {product.discount > 0 && <span className="product-discount">-{product.discount}%</span>}

           </div>
   
  );
}


function saveViewedProduct(product,product_id) {
          // Get the previously viewed products from local storage
          let previousViewedProducts = localStorage.getItem('previouslyViewedProducts');
          // If there are no previously viewed products, create an empty array
          // Otherwise, parse the previously viewed products from JSON
          previousViewedProducts === null?previousViewedProducts = []:previousViewedProducts = JSON.parse(previousViewedProducts);
          

          // Add the new product to the array of previously viewed products
          if (!previousViewedProducts.includes(product))previousViewedProducts.unshift(product);

          // Save the updated array of previously viewed products to local storage
          localStorage.setItem('previouslyViewedProducts', JSON.stringify(previousViewedProducts.slice(0,6)));
}

export default  ProductCard;
