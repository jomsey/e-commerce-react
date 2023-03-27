import {useNavigate} from "react-router-dom";
import Spinner from './Spinner';

Spinner
function CartCheckOutProducts({cartProducts,placingOrder,placeOrder}) {

  const navigate = useNavigate()
  const  formatToCurrencyFormat= Intl.NumberFormat()


  return (
    <div className="ordered-items">
          <div className="heading-row">
            <h5>ITEM</h5>
            <h5>QUANTITY</h5>
            <h5>PRICE</h5>
          </div>

          {
            cartProducts.map(({product,product_count})=>(
             
              <div className="row" key={product.product_uuid}>
                  <div className="product">
                      <div className="prod-image">
                           <img src={product.image_url} alt="....." />
                      </div>
                  <div>
                      <small>{(product.name).length > 40?`${product.name.slice(0,40)} ...`:product.name}</small><br />
                  </div>

                    </div>
                    <span className="product-count">{product_count}</span>
                    <span><small>KE</small> { formatToCurrencyFormat.format(Math.floor(product_count*product.discounted_price))}</span>
                  
              </div>
              
             )
            )
          }

          <div className="action-btns">
                <button onClick={()=>navigate("/cart")}>Update Cart</button>
                <button onClick={placeOrder}>{placingOrder?<>Processing  <Spinner/></>:"Confirm Order"}</button>
          </div>
          
        </div>
  )
}

export default CartCheckOutProducts