import { useNavigate } from "react-router-dom";
import { useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";


function CartSummary({products}) {
        const navigate  = useNavigate()
        const  formatToCurrencyFormat= Intl.NumberFormat()
        const {cartTotalPrice} = useContext(ShopContext);

        
        return (
            <div className="cart-summary">
                    <h4>Cart Summary</h4>
                    <div className="summary">
                      <div className="group1">
                        <h5>ITEMS</h5>
                        inp
                        <small>{products.length}</small>
                      </div>

                      <div className="group1">
                        <h5>TOTAL</h5>
                        <small>KES {formatToCurrencyFormat.format(cartTotalPrice)}</small>
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
                    <button className="checkout-btn" onClick={()=>navigate("/checkout")}>CHECKOUT</button>
                  </div>
      )
}

export default CartSummary