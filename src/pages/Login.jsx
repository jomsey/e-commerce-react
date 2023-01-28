import "./Auth.css";
import Icon from "../ui/Icon";
import jwtDecode from "jwt-decode"
import {apiEndPoint} from "../config.json"
import TopBar from './../components/TopBar';
import APIService from "../services/apiService";
import useToken from "../customHooks/useToken";
import authService from "../services/authService";
import { useNavigate,Link} from "react-router-dom";
import {useState,useEffect,useContext} from "react"
import { ShopContext} from "../shop-context/ShopState"



export default function Login() {
   const {setUser} = useContext(ShopContext)
   const [formData,setFormData] = useState({})
   const [formErrors,setFormErrors] = useState({})
   const {setToken,token} = useToken()
   const [isLoggingIn,setIsLogingIn]=useState(false)
   const navigate = useNavigate()


   
  const HandleFormSubmit=async(e)=>{
    e.preventDefault()
    setIsLogingIn(true)
    try { 
         const response= await authService.getToken(formData);
         const {access} = response.data
         const {user_id} = jwtDecode(access)
         setUser(user=>({...user,username:user_id,is_authenticated:"user"}))
         setToken(access)
         setIsLogingIn(false)
         navigate("/profile")
              
      } catch (error) {
         setIsLogingIn(false)
         if (error.response?.status==401 ||error.response?.status==400){
           setFormErrors(error.response.data)
         }
      }
    
     
  }

  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData(data=>({...data,[name]:value}))
  }

  
  return (
    <><TopBar showToggler={false}/>
    <div className="auth login">
      <div className="auth-container">
        <h1>Sign In</h1>
        <div className="overlay"></div>
        {formErrors.detail && <small className="form-detail-error">{formErrors.detail}</small>}
        {formErrors.info && <small className="form-detail-error">{formErrors.info}</small>}
        <form method="post" onSubmit={HandleFormSubmit}>
          <div className="input-group">
            <Icon iconName={"user"} extra={"input-icon"} />
            <input
              type="text"
              maxLength={20}
              placeholder="username"
              name="username"
              onChange={handleChange}
            />{formErrors.username && <small className="form-error">{formErrors.username}</small>}
          </div>
          <div className="input-group">
            <Icon iconName={"lock"} extra={"input-icon"} />
            <input type="password"
              placeholder="password"
              name="password" 
              onChange={handleChange}
              />

             {formErrors.password && <small className="form-error">{formErrors.password}</small>}

          </div>
          <div className="input-group flex-box">
            <div className="remember-me">
              <input type="checkbox" /> <small>Remember me</small>
            </div>
            <small>No account ? Signup <Link to="/auth/register">Here</Link></small>
          </div>
          <button type="submit">
              LOGIN  
              {isLoggingIn && <Icon iconName={"spinner"} extra={"submit-spinner"} />}
          </button>
        
          <div className="auth-options">
            <p>or login with</p>
            <div className="auth-icons">
              <Icon iconName={"facebook"} extra={"fa-brands facebook"} />
              <Icon iconName={"google"} extra={"fa-brands google"} />
              <Icon iconName={"twitter"} extra={"fa-brands twitter"} />
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
