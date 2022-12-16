import CartItem from "../components/CartItem";
import "./cartDetails.css";
import TopBar from "./../components/TopBar";
import Collection from "./../components/Collection";
import { useContext } from "react";
import { ShopContext } from "../shop-context/ShopState";
import cartService from "../services/cartService"

function CartDetails() {
  
  const {cartProducts,setCartProducts,products,cartId} = useContext(ShopContext);
 
  
  const removeCartItem = async (product_uuid) => {
    setCartProducts(cartProducts.filter(product=>product.product_uuid!==product_uuid))
    await cartService.removeFromCart(cartId,product_uuid)
  };

 
  return (
    <>
      <TopBar showToggler={true} />
      <div className="cart-details">
        <div className="cart-items">
          <h4>Shopping Cart</h4>

          {cartProducts.length > 0 ? (
            cartProducts.map(({product,product_count,product_uuid}) => ( 
              <CartItem
                product={product}
                key={product_uuid}
                item_count={product_count}
                cartId={cartId}
                product_uuid={product_uuid}
                onCartItemRemove={() => removeCartItem(product_uuid)}
              />
            ))
          ) : (
            <h3 className="cart-empty-text">No Items To Display</h3>
          )}
        </div>
        {cartProducts.length> 0 && (
          <div className="cart-summary">
            <h4>Cart Summary</h4>
            <div className="summary">
              <div className="group1">
                <h5>ITEMS</h5>
                <small>{cartProducts.length}</small>
              </div>

              <div className="group1">
                <h5>TOTAL</h5>
                <small>KES 500</small>
              </div>

              <div className="group1">
                <h5>SHIPPING FEE</h5>
                <small>KES 30</small>
              </div>
              <div className="group1">
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
      {products.length>0 &&  <Collection title={"Recently Viewed"} productsList={products}/>}
    </>
  );
}

export default CartDetails;
