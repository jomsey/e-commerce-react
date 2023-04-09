import "./Checkout.css";
import axios from "axios";
import TopBar from "../components/TopBar";
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import {useNavigate} from "react-router-dom";
import Spinner  from "../components/Spinner"
import useToken from "../customHooks/useToken";
import {apiEndPoint} from "../config.json"



function CheckOut() {
        const {cartProducts,setCartProducts} = useContext(ShopContext);
        const [placingOrder,setPlacingOrder] = useState(false)
        const  formatToCurrencyFormat= Intl.NumberFormat()
        const [editable , setEditable] = useState(false)
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
           
              <div className="info">
                <div className="bunch">

                 {editable?<button onClick={()=>setEditable(false)}>Save</button>:
                  <button onClick={()=>setEditable(true)}>Edit</button>}

                  <div className="personal-info">
                        <h4>Your Information</h4> 
                        <small>FIRST NAME</small>
                        <br />
                        {!editable?<span>Muwanguzi</span>:  <input type="text" name="first_name" placeholder="Muwanguzi" />}
                        <br />
                        <small>SECOND NAME</small>
                        <br />
                        {!editable?<span>Joseph</span>:  <input type="text" name="last_name" placeholder="Joseph" />}
                        <br />
                        <small>EMAIL</small>
                        <br />
                        {!editable? <span>muwanguzijoseph75@gmail.con</span>:  <input type="text" name="first_name" placeholder="muwanguzijoseph75@gmail.con" />}
                        <br />
                        <small>PHONE</small>
                        <br />
                        {!editable?<span>+256 754 608 152</span>:  <input type="text" name="first_name" placeholder="+256 754 608 152" />}
                  </div>

                  <div className="payment-info">
                        <h4>Payment Information</h4>
                       {!editable?
                       <span>MPESA</span>:
                                  <select>
                                    <option value="">....</option>
                                    <option value="1">PayPal</option>
                                    <option value="2">VISA</option>
                                    <option value="3">MPESA</option>
                                  </select>}
                  </div>
                </div>

                <div className="bunch">
                    <div className="shipping-address-info">
                            <h4>Shipping Address</h4>
                            {!editable?<span>Kampala , Uganda</span>:
                            <input type="text" name="city" placeholder="Kampala , Uganda" />}
                            <br />
                            {!editable?<span>Kabaka Anjagala,rd</span>:
                            <input type="text" name="city" placeholder="Kabaka Anjagala,rd" />}
                            <br />
                          {!editable? <span>William st</span>:
                            <input type="text" name="street" placeholder="William st" />}
                            <br />
                          {!editable? <span>Uganda</span>:
                            <input type="text" name="country" placeholder="Uganda" />}
                    </div>

                    <div className="billing-address-info">
                            <h4>Billing Address</h4>
                            {!editable?<span>Kampala , Uganda</span>:
                            <input type="text" name="city" placeholder="Kampala , Uganda" />}
                            <br />
                            {!editable?<span>Kabaka Anjagala,rd</span>:
                            <input type="text" name="city" placeholder="Kabaka Anjagala,rd" />}
                            <br />
                          {!editable? <span>William st</span>:
                            <input type="text" name="street" placeholder="William st" />}
                            <br />
                          {!editable? <span>Uganda</span>:
                            <input type="text" name="country" placeholder="Uganda" />}
                    </div>
                </div>
              </div>
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
            </div>
          </>
  );
}

export default CheckOut;
