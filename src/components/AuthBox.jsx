import "./AuthBox.css"
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../shop-context/ShopState";


function AuthBox({user,onUserLogout}){
    const navigate = useNavigate()
    const {username} = useContext(ShopContext)
    
    return (
        <div className="auth-box">
            {(user.is_authenticated) && <small><b>Hello , {username}</b></small>}
            {user.is_authenticated?
            <>
                <span onClick={()=>navigate("/profile")}>My Profile</span>
                <button className="button-overlay" onClick={onUserLogout}>LOGOUT</button>
            </>:
            <>
              <button className="button-overlay"  onClick={()=>navigate("/auth/login")}>LOGIN</button>
              <button className="button-overlay"  onClick={()=>navigate("/auth/register")}>REGISTER</button>
            </>}

        </div>
    );
}

export default AuthBox;
