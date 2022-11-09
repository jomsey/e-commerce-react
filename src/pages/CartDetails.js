import CartItem from "../components/CartItem";
import "./cartDetails.css";
import TopBar from "./../components/TopBar";
import { products } from "./../utils/sample_products";
import Collection from "./../components/Collection";
import { useContext } from "react";
import { ShopContext } from "../shop-context/ShopState";


function CartDetails() {
  
 
  const {cartProducts,setCartProducts} = useContext(ShopContext);
  

  const removeCartItem = (product) => {
    setCartProducts(cartProducts.filter((item) => item.id !== product.id));
  };

  

  return (
    <>
      <TopBar showToggler={true} />
      <div className="cart-details">
        <div className="cart-items">
          <h4>Shopping Cart</h4>

          {cartProducts.length > 0 ? (
            cartProducts.map((product) => ( 
              <CartItem
                product={product}
                key={product.id}
                onCartItemRemove={() => removeCartItem(product)}
              />
            ))
          ) : (
            <h3>No Items To Display</h3>
          )}
        </div>
        {cartProducts.length> 0 && (
          <div className="cart-summary">
            <h4>Cart Summary</h4>
            <div className="summary">
              <div className="group">
                <h5>ITEMS</h5>
                <small>{cartProducts.length}</small>
              </div>

              <div className="group">
                <h5>TOTAL</h5>
                <small>KES 500</small>
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
        )}
      </div>
       <Collection title={"Recently Viewed"} productsList={products}/>
    </>
  );
}

export default CartDetails;
