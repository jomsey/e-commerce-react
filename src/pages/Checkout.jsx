import "./Checkout.css";
import axios from "axios";
import TopBar from "../components/TopBar";
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import {useNavigate} from "react-router-dom";
import Spinner  from "../components/Spinner"
import useToken from "../customHooks/useToken";
import {apiEndPoint} from "../config.json"
import BillingInformation from "../components/BillingInformation";



function CheckOut() {
        const {cartProducts,setCartProducts} = useContext(ShopContext);
        const [placingOrder,setPlacingOrder] = useState(false)
        const  formatToCurrencyFormat= Intl.NumberFormat()
        const {token} = useToken()
        const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});


        const navigate = useNavigate()

        const placeOrder=async()=>{

              setPlacingOrder(true) //display processing loader
              const cart_uuid = window.localStorage.getItem("cartId")
              try {
                  const {status} = await instance.post(`${apiEndPoint}/orders/`,{cart:cart_uuid})
            
                  if(status === 201){
                          window.localStorage.removeItem("cartId");//delete cartId in local storage after is submitted
                          setCartProducts([])
                          navigate("/order-success")
                          setPlacingOrder(false)
                  }
              } catch (error) {
                      console.log(error);
                      setPlacingOrder(false)
              }

        }

        return (
          <>
            <TopBar showToggler={true} />
            <div className="check-out">
           
             <BillingInformation/>
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
                      <button className="button-overlay" onClick={()=>navigate("/cart")}>Update Cart</button>
                      <button className="button-overlay" onClick={placeOrder}>{placingOrder?<>Processing  <Spinner/></>:"Confirm Order"}</button>
                </div>
                
              </div>
            </div>
          </>
  );
}

export default CheckOut;
