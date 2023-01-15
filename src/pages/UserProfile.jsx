import "./UserProfile.css";
import TopBar from "../components/TopBar";
import ProfileSideBar from "../components/ProfileSideBar";
import OrderItems from "../components/OrderItems";
import SavedItems from "../components/SavedItems";
import {useState,useEffect} from "react"
import userService from "../services/userService";
import orderSevice from "../services/orderSevice";
import jwtDecode from "jwt-decode"
import useToken from "../customHooks/useToken";


export default function UserProfile() {
  const {token} = useToken()
  const [orderItems,setOrderItems] = useState([])
  const [ordersVisibility, setOrdersVisibility] = useState(true);
  const[activeClass] = useState("")

  const HandleToggle=()=>{
    ordersVisibility?setOrdersVisibility(false):setOrdersVisibility(true);
   // ordersVisibility?setActiveClass("active"):setActiveClass("");
  }

  const getUserOrders=async()=>{
    const response = await  orderSevice.getUserOrders()
    setOrderItems(response.data.results)
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
                 {(ordersVisibility &&  <OrderItems orders={orderItems}/> )||  <SavedItems/>}
            </div>
          </div>
          
        </main>
      </section>
    </>
  );
}
           