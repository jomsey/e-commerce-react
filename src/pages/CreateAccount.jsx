import Icon from "../ui/Icon";
import "./Auth.css";
import TopBar from './../components/TopBar';
import {useState,useEffect,useContext} from "react"
import APIService from "../services/apiService";
import {apiEndPoint} from "../config.json"
import { useNavigate ,Link} from "react-router-dom";
import { ShopContext} from "../shop-context/ShopState"
import authService from "../services/authService";




export default function CreateAccount() {
  const [formData,setFormData] = useState({})
  const [formErrors,setFormErrors] = useState({})
  const {setUser} = useContext(ShopContext)

  
  const navigate = useNavigate()

  const HandleFormSubmit=async(e)=>{
    e.preventDefault()
    try { 
         const response= await authService.registerUser(formData);
         const {access:jwt} = response.data
         localStorage.setItem("token",jwt)
         try {
          console.log(jwtDecode(jwt))
          const {user_id} = jwtDecode(jwt)
          setUser({username:user_id,authenticated:true})
        } catch (error) {}
        
         navigate("/profile")
   
      } catch (error) {
        if (error.response?.status==401 ||error.response?.status==400){
           setFormErrors(error.response.data)
         }
         else setFormErrors({info:"Oops something is wrong !"})
      }
    
     
  }

  const handleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData(data=>({...data,[name]:value}))
  }


  return (
    <><TopBar showToggler={false}/>
    <div className="register auth">
      <div className="auth-container ">
        <h1>Sign Up</h1>
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
            <Icon iconName={"envelope"} extra={"input-icon"} />
            <input type="email"
              placeholder="email"
              name="email" 
              onChange={handleChange}
              />

             {formErrors.email && <small className="form-error">{formErrors.email}</small>}

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
            <small>Have account ? Login <Link to="/auth/login">Here</Link></small>
          </div>
          <button type="submit">SIGN UP</button>
          <div className="auth-options">
            <p>or sign up with</p>
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
