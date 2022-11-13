import { useNavigate } from "react-router-dom";
import "./AuthBox.css"

function AuthBox({user,onUserLogout}){
    const navigate = useNavigate()
    return (
        <div className="auth-box">
             {(user.authenticated) && <small><b>Hello , {user.username}</b></small>}
            <span onClick={()=>navigate("/profile")}>My Account</span>
            {user.authenticated?
            <button onClick={onUserLogout}>LOGOUT</button>:
            <button onClick={()=>navigate("/auth/login")}>LOGIN</button>}
        </div>
    );
}

export default AuthBox;
