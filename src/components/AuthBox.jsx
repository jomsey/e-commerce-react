import { useNavigate } from "react-router-dom";
import "./AuthBox.css"

function AuthBox({user,onUserLogout}){
    const navigate = useNavigate()
    
    return (
        <div className="auth-box">
            {(user.is_authenticated) && <small><b>Hello , {user.username}</b></small>}
            <span onClick={()=>navigate("/profile")}>My Account</span>
            {user.is_authenticated?
            <button className="button-overlay" onClick={onUserLogout}>LOGOUT</button>:
            <button className="button-overlay"  onClick={()=>navigate("/auth/login")}>LOGIN</button>}
        </div>
    );
}

export default AuthBox;
