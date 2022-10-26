import CartItem from "../components/CartItem";
import "./cartDetails.css";
import cartProducts from "./../utils/cartItems";
import { useState } from "react";

let cartItems = [...cartProducts];

function CartDetails() {
  
  const [items, setItems] = useState(cartItems);

  const removeCartItem = (product) => {
    setItems(items.filter((item) => item.id !== product.id));
  };

  return (
    <div className="cart-details">
      <div className="cart-items">
        <h4>Shopping Cart</h4>
        
        {  items.length>0?items.map((product) => (
          <CartItem
            product={product}
            key={product.id}
            onCartItemRemove={() => removeCartItem(product)}
          />
        )):<h3>No Items To Display</h3>}


      </div>
      <div className="cart-summary">
        <h4>Cart Summary</h4>
        <div className="summary">
          <div className="group">
            <h5>ITEMS</h5>
            <small>{items.length}</small>
          </div>

          <div className="group">
            <h5>TOTAL</h5>
            <small>KES 5000</small>
          </div>

          <div className="group">
            <h5>SHIPPING FEE</h5>
            <small>KES 30</small>
          </div>
          <div className="group">
            <h5>VAT</h5>
            <small>KES 50</small>
          </div>
        </div>
        <div className="payment-methods">
          <h5>PAYMENT METHODS</h5>
          <form action="" method="get">
            <select>
              <option value="">....</option>
              <option value="1">PayPal</option>
              <option value="2">VISA</option>
              <option value="3">MPESA</option>
            </select>
          </form>
        </div>
        <button className="checkout-btn">CHECKOUT</button>
      </div>
    </div>
  );
}

export default CartDetails;
