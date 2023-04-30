import "./UserProfile.css";
import {useState} from "react"
import TopBar from "../components/TopBar";
import OrderItems from "../components/OrderItems";
import SavedItems from "../components/SavedItems";
import UserInfoGroup  from "../components/ProfileSideBar";
import Icon from './../ui/Icon';
import Messages from "../components/Messages";
import BillingInformation from "../components/BillingInformation";



export default function UserProfile() {
        const [ordersVisible, setOrdersVisible] = useState(true);
        const [billingInfoVisible, setBillingInfoVisible] = useState(false);
        const [savedProductsVisible, setSavedProductsVisible] = useState(false);
        const [messagesVisible, setMessagesVisible] = useState(false);
        const [navCanvasFull,setNavCanvasFull] = useState(false)
        const [userProfileVisible,setUserProfileVisible] = useState(false)

      
        
        const handleShowOrdersButtonClick=()=>{
              setOrdersVisible(true)
              savedProductsVisible && setSavedProductsVisible(false)
              messagesVisible && setMessagesVisible(false)
              billingInfoVisible && setBillingInfoVisible(false)
              userProfileVisible && setUserProfileVisible(false)


        }

        const handleShowProfileButtonClick=()=>{
            setUserProfileVisible(true)
            savedProductsVisible && setSavedProductsVisible(false)
            messagesVisible && setMessagesVisible(false)
            billingInfoVisible && setBillingInfoVisible(false)
            ordersVisible && setOrdersVisible(false)

      }

        const handleShowSavedProductsButtonClick=()=>{
              setSavedProductsVisible(true)
              ordersVisible && setOrdersVisible(false)
              messagesVisible && setMessagesVisible(false)
              billingInfoVisible && setBillingInfoVisible(false)
              userProfileVisible && setUserProfileVisible(false)


              
        }

        const handleShowMessagesButtonClick=()=>{
              setMessagesVisible(true)
              ordersVisible && setOrdersVisible(false)
              savedProductsVisible && setSavedProductsVisible(false)
              billingInfoVisible && setBillingInfoVisible(false)
              userProfileVisible && setUserProfileVisible(false)


        }

        const handleShowBullingInfoButtonClick=()=>{
            setBillingInfoVisible(true)
            ordersVisible && setOrdersVisible(false)
            savedProductsVisible && setSavedProductsVisible(false)
            messagesVisible && setMessagesVisible(false)

      }


        return (
          
          <> 
            <TopBar showToggler={true} onTogglerIconClick={()=>navCanvasFull?setNavCanvasFull(false):setNavCanvasFull(true)}/>

            <section className="profile-container" >
                  <UserInfoGroup />
                  <main>
                    <div className="general-view">
                      <ul className={navCanvasFull?"view-navs  view-navs-full":"view-navs"}>
                            <li className={userProfileVisible?"nav toggle-btn sm-visible active":"nav toggle-btn sm-visible"}  onClick={handleShowProfileButtonClick}><Icon iconName="user"/><span className="nav-title">Profile</span></li>
                            <li className={ordersVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowOrdersButtonClick}><Icon iconName="plus"/><span className="nav-title">Orders</span></li>
                            <li className={savedProductsVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowSavedProductsButtonClick}><Icon iconName="heart"/><span className="nav-title">Saved Items</span></li>
                            <li className={messagesVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowMessagesButtonClick}><Icon iconName="envelope"> <span className="count-badge">5</span> </Icon><span className="nav-title">Messages</span></li>
                            <li className={billingInfoVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowBullingInfoButtonClick}><Icon iconName="map"/><span className="nav-title">Billing Information</span></li>
                            <li className={"nav toggle-btn sm-visible btn-logout logout"}><Icon iconName="sign-out"/><span className="nav-title">Logout</span></li>   
                            <li className={"nav toggle-btn"} ><Icon iconName="gears"/><span className="nav-title">Settings</span></li>
   
                      </ul>
                      <div className="display">
                          {ordersVisible && <OrderItems/> }
                          {savedProductsVisible &&  <SavedItems/>}
                          {messagesVisible && <Messages/>}
                          {billingInfoVisible && <BillingInformation/>}
                          {userProfileVisible && <UserInfoGroup />}
                        
                          </div>
                    </div>
                
              </main>
            </section>
          </>
        );
}
           