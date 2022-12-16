import Icon from "../ui/Icon";
import "./Login.css";
import TopBar from './../components/TopBar';
import {useState,useEffect,useContext} from "react"
import APIService from "../services/apiService";
import {apiEndPoint} from "../config.json"
import { useNavigate } from "react-router-dom";
import { ShopContext} from "../shop-context/ShopState"



export default function Login() {
  const [formData,setFormData] = useState({})
  const [formErrors,setFormErrors] = useState({})
  const {setUser} = useContext(ShopContext)

  
  const navigate = useNavigate()

  const HandleFormSubmit=async(e)=>{
    e.preventDefault()
    try { 

         const response= await APIService.post(`${apiEndPoint}/token/`,formData);
         const {access:jwt} = response.data
         localStorage.setItem("token",jwt)
         try {
          const {user_id} = jwtDecode(jwt)
          setUser({username:user_id,authenticated:true})
        } catch (error) {}
        
         navigate("/profile")
   
      } catch (error) {
         if (error.response && error.response.status==401 || error.response.status==400){
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
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <div className="overlay"></div>
        {formErrors.detail && <small className="form-detail-error">{formErrors.detail}</small>}
        <form method="post" onSubmit={HandleFormSubmit}>
          <div className="input-group">
            <Icon iconName={"user"} extra={"input-icon"} />
            <input
              type="text"
              maxLength={10}
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
            <p>Forgot password</p>
          </div>
          <button type="submit">LOGIN</button>
          <div className="login-options">
            <p>or login with</p>
            <div className="login-icons">
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
