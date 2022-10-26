import "./CartItem.css";
import Counter from "./Counter";


function CartItem({product,onCartItemRemove}) {
  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={product.image_url} alt="..." />
      </div>
      <div className="cart-group">
        <h5>{product.name}</h5>
        <button onClick={onCartItemRemove}>Remove From Cart</button>
      </div>
      <Counter />
      <div className="cart-group">
        <h5>Price: {product.price}</h5>
      </div>
    </div>
  );
}

export default CartItem;
