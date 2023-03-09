import Icon from "./../ui/Icon";
import {useNavigate} from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";
import { useContext,useState } from "react";
import AuthBox from "./AuthBox";
import useToken from "../customHooks/useToken";



function TopBarIcons() {
  
  const navigate = useNavigate()
  const { cartNumber,user ,setUser,setAuthenticated} = useContext(ShopContext);
  const [authBoxVisible,setAuthBoxVisible]= useState(false)
  const {setToken} = useToken()
  
  const handleLogout=()=>{
        setUser({username:null,is_autheticated:false})
        setToken(null)
  }

  return (
    <>
      <Icon extra="icon" iconName="user" onIconClick={()=> authBoxVisible?setAuthBoxVisible(false):setAuthBoxVisible(true)} />
     
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
      />
     {authBoxVisible &&  <AuthBox user={user} onUserLogout={handleLogout}/>}
    </>
  );
}

export default TopBarIcons;
