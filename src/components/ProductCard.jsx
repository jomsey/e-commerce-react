import "./ProductCard.css";
import Icon from "../ui/Icon";
import {useContext,useState,useEffect} from "react"
import { toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import cartService from "../services/cartService";
import { ShopContext} from "../shop-context/ShopState"
import Spinner from "./Spinner"


function ProductCard({product}) {
    const [addingToCart,setAddingToCart] = useState(false)
    const navigate = useNavigate()
    const  formatToCurrencyFormat= Intl.NumberFormat()
    const {cartProducts,setCartProducts,cartNumber,setCartNumber} = useContext(ShopContext);
     
    const handleProductDetailClick=(product,product_id)=>{
          navigate(`/products/${product_id}`)
          saveViewedProduct(product_id)
    }


    const AddItemToCart = async(product_id)=>{
      
          setAddingToCart(true) //display loader
          const cartId = localStorage.getItem("cartId")

          if (cartId === null){
              try {
                  const response = await cartService.createCart()
                  localStorage.setItem("cartId",response.data.cart_uuid)
              } catch (error) {}
          }
                
            try {
                const  {status} = await cartService.addToCart({"product":product_id},cartId)
                if (status === 201){
                    setCartProducts([product,...cartProducts])
                    setAddingToCart(false)
                }
                setAddingToCart(false)
                
            } catch (error) {}
   }

  function addProductToWishList() {
           console.log( " added to wishList");
  }

  
  return (
  
      <div className="product-card">

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
            {product.name.length > 40 ? `${product.name.toLowerCase().slice(0,20)}...` : product.name}
          </span>

          <small className="product-price">
            <strong>
              {product.discount > 0 && <strike>{formatToCurrencyFormat.format(product.price)} KES</strike>} {formatToCurrencyFormat.format(product.discounted_price)} KES
            </strong>
          </small>

          <div className="buttons">
            <span onClick={()=>handleProductDetailClick(product,product.id)} className="detail-btn">DETAILS</span>
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

export default ProductCard;
