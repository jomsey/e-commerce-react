import "./CartItem.css";
import Counter from "./Counter";
import { useState } from "react";
import cartService from "../services/cartService"


function CartItem({product,onCartItemRemove,item_count,cartId,product_uuid}) {
  let [count, setCount] = useState(item_count);

  const HandleCountIncrease=()=>{
        count<10?setCount(count+1):setCount(10);
        cartService.updateCart(cartId,product_uuid,{product_count:count+1})
  }

  const  HandleCountDecrease=()=>{
         count>1?setCount(count-1):setCount(1);
         cartService.updateCart(cartId,product_uuid,{product_count:count-1})
  }


  return (
    <div className="cart-item">
        <div className="item-image">
            <img src={product.image_url} alt="..." />
        </div>

       <div className="cart-group">
           <h5>{(product.name).length > 25?`${product.name.slice(0,25)} ...`:product.name}</h5>
           <button onClick={onCartItemRemove}>Remove From Cart</button>
       </div>

       <Counter count={count} 
                onCountIncrease={HandleCountIncrease} 
                onCountDecrease={HandleCountDecrease}/>

      <div className="cart-group">
           <h5 className="price">Price<br/><span> {(product.price)*count}</span></h5>
      </div>
    </div>
  );
}

export default CartItem;
