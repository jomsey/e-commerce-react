import "./ProductCard.css";
import Icon from "../ui/Icon";
import {useContext} from "react"
import { toast} from 'react-toastify';
import { useNavigate } from "react-router-dom";
import cartService from "../services/cartService";
import { ShopContext} from "../shop-context/ShopState"


function ProductCard({product}) {
  
  const navigate = useNavigate()
  const {cartProducts,setCartProducts,cartNumber,setCartNumber} = useContext(ShopContext);

  async function AddItemToCart(product_id){
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
              await cartService.addToCart({"product":product_id},cartId)
             
        } catch (error) {
            console.log(error)
        }
   }

  function addProductToWishList() {
    console.log( " added to wishList");
  }

  
  return (
  
      <div className="product-card">
        <div className="product-image">
          <img src={product.image_url} alt={product.name} />
        </div>
        <div className="container">
          <span className="product-name">
            {product.name.length > 40 ? `${product.name.toLowerCase().slice(0,20)}...` : product.name}
          </span>

          <small className="product-price">
            <strong>
              {product.discount > 0 && <strike>{product.price} KES</strike>} {product.discounted_price} KES
            </strong>
          </small>

          <div className="buttons">
            <span onClick={()=>navigate(`/products/${product.id}`)} className="detail-btn">DETAILS</span>
            <div className="add-btns">
              <Icon
                extra={"wish-icon"}
                iconName={"heart"}
                onIconClick={() => addProductToWishList()}
              />
              <Icon
                extra={"cart-icon"}
                iconName={"shopping-cart"}
                onIconClick={()=>AddItemToCart(product.id)}
              />
            </div>
          </div>
        </div>
        {product.discount > 0 && <span className="product-discount">-{product.discount}%</span>}

      </div>
   
  );
}

export default ProductCard;
