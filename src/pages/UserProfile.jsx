import "./UserProfile.css";
import jwtDecode from "jwt-decode"
import {useState,useEffect} from "react"
import TopBar from "../components/TopBar";
import useToken from "../customHooks/useToken";
import OrderItems from "../components/OrderItems";
import SavedItems from "../components/SavedItems";
import userService from "../services/userService";
import orderSevice from "../services/orderSevice";
import ProfileSideBar from "../components/ProfileSideBar";


export default function UserProfile() {
  console.log("render-profile")
  const {token} = useToken()
  const [orderItems,setOrderItems] = useState([])
  const [ordersVisibility, setOrdersVisibility] = useState(true);
  const[activeClass] = useState("")
  const [ordersLoading,setOrdersLoading] = useState(true)

  const HandleToggle=()=>{
    ordersVisibility?setOrdersVisibility(false):setOrdersVisibility(true);
   // ordersVisibility?setActiveClass("active"):setActiveClass("");
  }

  const getUserOrders=async()=>{
    const response = await orderSevice.getUserOrders()
    setOrderItems(response.data.results)
    setOrdersLoading(false)
   } 

 
  useEffect(() => {
    getUserOrders()  
  }, []);
  

  return (
    
    <>
      <TopBar showToggler={true} />
      <section className="profile-container" >
       <ProfileSideBar/>
        <main>
          <div className="general-view">
            <div className="view-navs">
                 <div className={`nav toggle-btn ${activeClass}`} onClick={HandleToggle}>Orders</div>
                  <div className={`nav toggle-btn ${activeClass}`} onClick={HandleToggle}>Saved Items</div>
            </div>
            <div className="display">
                 {(ordersVisibility &&  <OrderItems orders={orderItems} loading={ordersLoading}/> )||  <SavedItems/>}
            </div>
          </div>
          
        </main>
      </section>
    </>
  );
}
           