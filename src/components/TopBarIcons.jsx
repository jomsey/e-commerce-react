import Icon from "./../ui/Icon";
import {useNavigate} from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";
import { useContext,useState } from "react";
import AuthBox from "./AuthBox";
import useToken from "../customHooks/useToken";
import "./TopBarIcons.css"



function TopBarIcons() {
  
  const navigate = useNavigate()
  const { cartNumber,user ,setUser} = useContext(ShopContext);
  const [authBoxVisible,setAuthBoxVisible]= useState(false)
  const {setToken} = useToken()
  
  const handleLogout=()=>{
        setUser({username:null,is_autheticated:false})
        setToken(null)
  }

  return (
    <>
       <div className="user-icon-group">
            {user.is_authenticated && <span className="user-active-badge"></span>}
            <Icon 
                extra="icon i-user" 
                iconName="user"
                onIconClick={()=> authBoxVisible?setAuthBoxVisible(false):setAuthBoxVisible(true)} />
       </div>
     
        <Icon
            extra="icon"
            iconName="shopping-cart"
            onIconClick={()=>navigate("/cart")}
        >
          
        {cartNumber>0 && <span className="items-number">{cartNumber }</span>}

        </Icon>
     
    
      <Icon
        extra="icon"
        iconName="question"
        onIconClick={()=>navigate("/about")}
      />
     {authBoxVisible &&  <AuthBox user={user} onUserLogout={handleLogout}/>}
    </>
  );
}

export default TopBarIcons;
