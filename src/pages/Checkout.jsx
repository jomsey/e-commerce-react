import "./Checkout.css";
import axios from "axios";
import TopBar from "../components/TopBar";
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import cartService from "../services/cartService"
import {useNavigate} from "react-router-dom";
import orderSevice from "../services/orderSevice";
import Spinner  from "../components/Spinner"
import useToken from "../customHooks/useToken";
import {apiEndPoint} from "../config.json"



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
            window.localStorage.removeItem("cartId");//delete cartId in localstoage after is submited
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
        <h3>Order Summary</h3>
        <div className="info">
          <div className="bunch">
            <div className="personal-info">
                <h4>Your Information</h4> <span>Edit</span>
                <small>FIRST NAME</small>
                <br />
                <span>Muwwanguzi</span>
                <br />
                <small>SECOND NAME</small>
                <br />
                <span>Joseph</span>
                <br />
                <small>EMAIL</small>
                <br />
                <span>muwanguzijoseph75@gmail.con</span>
                <br />
                <small>PHONE</small>
                <br />
                <span>+256 754 608 152</span>
            </div>
            <div className="payment-info">
              <h4>Payment Information</h4> <span>Edit</span>
              <span>MPESA</span>
            </div>
          </div>

          <div className="bunch">
              <div className="shipping-address-info">
                  <h4>Shipping Address</h4> <span>Edit</span>
                  <span>Kampala , Uganda</span>
                  <br />
                  <span>Kabaka Anjagala,rd</span>
                  <br />
                  <span>William st</span>
                  <br />
                  <span>Uganda</span>
              </div>

              <div className="billing-address-info">
                  <h4>Billing Address</h4> <span>Edit</span>
                  <span>Kampala , Uganda</span>
                  <br />
                  <span>Kabaka Anjagala,rd</span>
                  <br />
                  <span>William st</span>
                  <br />
                  <span>Uganda</span>
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
            cartProducts.map(({product,product_count,cart_uuid})=>(
             
              <div className="row" key={product.product_uuid}>
                  <div className="product">
                      <div className="prod-image">
                           <img src={product.image_url} alt="....." />
                      </div>
                  <div>
                      <small>{(product.name).length > 40?`${product.name.slice(0,40)} ...`:product.name}</small><br />
                  </div>

                    </div>
                    <span>{product_count}</span>
                    <span><small>KE</small> { formatToCurrencyFormat.format(Math.floor(product_count*product.discounted_price))}</span>
                  
              </div>
              
             )
            )
          }

          <div className="action-btns">
                <button onClick={()=>navigate("/cart")}>Update Cart</button>
                <button onClick={placeOrder}>{placingOrder?<>Processing  <Spinner/></>:"Comfirm Order"}</button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default CheckOut;
