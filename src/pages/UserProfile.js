import "./UserProfile.css";
import TopBar from "../components/TopBar";
import ProfileSideBar from "../components/ProfileSideBar";
import OrderItems from "../components/OrderItems";
import SavedItems from "../components/SavedItems";
import {useState} from "react"


export default function UserProfile() {
  const [ordersVisibility, setOrdersVisibility] = useState(true);
  const[activeClass] = useState("")

  const HandleToggle=()=>{
    ordersVisibility?setOrdersVisibility(false):setOrdersVisibility(true);
   // ordersVisibility?setActiveClass("active"):setActiveClass("");
  }

  return (
    
    <>

      <TopBar showToggler={true} />
      <section className="profile-container">
       <ProfileSideBar/>
        <main>
          <div className="general-view">
            <div className="view-navs">
              <div className={`nav toggle-btn ${activeClass}`} onClick={HandleToggle}>Orders</div>
              <div className={`nav toggle-btn ${activeClass}`} onClick={HandleToggle}>Saved Items</div>
            </div>
            <div className="display">
            {(ordersVisibility &&  <OrderItems/> )||  <SavedItems/>}
           
            
            </div>

            
        
          </div>
          
        </main>
      </section>
    </>
  );
}
           