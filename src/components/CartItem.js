import "./CartItem.css";
import Counter from "./Counter";
import { useState } from "react";



function CartItem({product,onCartItemRemove}) {
  let [count, setCount] = useState(1);

  const HandleCountIncrease=()=>count<10?setCount(count+1):setCount(10);
  const  HandleCountDecrease=()=>count>1?setCount(count-1):setCount(1);

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.image} alt="..." />
      </div>
      <div className="cart-group">
        <h5>{product.name}</h5>
        <button onClick={onCartItemRemove}>Remove From Cart</button>
      </div>
      <Counter count={count} onCountIncrease={HandleCountIncrease} onCountDecrease={HandleCountDecrease}/>
      <div className="cart-group">
        <h5 className="price">Price: <span> {(product.price)*count}</span></h5>
      </div>
    </div>
  );
}

export default CartItem;
