import "./UserProfile.css";
import {useEffect, useState} from "react"
import TopBar from "../components/TopBar";
import OrderItems from "../components/OrderItems";
import SavedItems from "../components/SavedItems";
import ProfileSideBar from "../components/ProfileSideBar";
import OffCanvas from "../components/OffCanvas";
import Icon from './../ui/Icon';
import RecentlyViewedProducts from './../components/RecentlyViewedProducts';



export default function UserProfile() {
        const [ordersVisible, setOrdersVisible] = useState(true);
        const [savedProductsVisible, setSavedProductsVisible] = useState(false);
        const [messagesVisible, setMessagesVisible] = useState(false);

      
        
        const handleShowOrdersButtonClick=()=>{
              setOrdersVisible(true);
              savedProductsVisible && setSavedProductsVisible(false)
              messagesVisible && setMessagesVisible(false)

        }

        const handleShowSavedProductsButtonClick=()=>{
              setSavedProductsVisible(true)
              ordersVisible && setOrdersVisible(false)
              messagesVisible && setMessagesVisible(false)
              
        }

        const handleShowMessagesButtonClick=()=>{
              setMessagesVisible(true)
              ordersVisible && setOrdersVisible(false)
              savedProductsVisible && setSavedProductsVisible(false)
        }


        return (
          
          <> 
            <OffCanvas>
              {/* to be displayed only on small screens */}
              <ProfileSideBar/>
            </OffCanvas>

            <TopBar showToggler={true} useMobileSideNav={true} />

            <section className="profile-container" >
                  <ProfileSideBar/>
                  <main>
                    <div className="general-view">
                      <ul className="view-navs">
                            <li className={ordersVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowOrdersButtonClick}><Icon iconName="plus"/><span className="nav-title">Orders</span></li>
                            <li className={savedProductsVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowSavedProductsButtonClick}><Icon iconName="heart"/><span className="nav-title">Saved Items</span></li>
                            <li className={messagesVisible?`nav toggle-btn active`:"nav toggle-btn"} onClick={handleShowMessagesButtonClick}><Icon iconName="envelope"> <span className="count-badge">5</span> </Icon><span className="nav-title">Messages</span></li>
                            <li className={"nav toggle-btn"}><Icon iconName="map"/><span className="nav-title">Billing Information</span></li>
                            
                      </ul>
                      <div className="display">
                          {ordersVisible && <OrderItems/> }
                          {savedProductsVisible &&  <SavedItems/>}
                          </div>
                    </div>
                
              </main>
            </section>
            <RecentlyViewedProducts/>
          </>
        );
}
           