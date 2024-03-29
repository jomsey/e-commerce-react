import Icon from "../ui/Icon";
import "./Auth.css";
import TopBar from './../components/TopBar';
import {useState,useContext} from "react"
import { useNavigate ,Link} from "react-router-dom";
import { ShopContext} from "../shop-context/ShopState"
import authService from "../services/authService";
import useToken from "../customHooks/useToken";
import Spinner from "../components/Spinner";
import jwtDecode from "jwt-decode"



export default function CreateAccount() {
  const [formData,setFormData] = useState({})
  const [formErrors,setFormErrors] = useState({})
  const [isSigningUp,setIsSigningUp]=useState(false)
  const {setUser,setAlertMessage} = useContext(ShopContext)
  const {setToken} = useToken()
  const [isLoggingInUser,setIsLoggingInUser] = useState(false)

  
  const navigate = useNavigate()

  const HandleFormSubmit=async(e)=>{
    setIsSigningUp(true)
    e.preventDefault()
    try { 
         const {status}= await authService.registerUser(formData);
         
         //login user after successful account creation
         if (status === 201) {
          setAlertMessage({message:"Successfully created account !"})
          setIsSigningUp(false)
          setIsLoggingInUser(true)
           try {
                const {username,password} = formData
                const {data}= await authService.getToken({username:username,password:password});
                const {user_id} = jwtDecode(data.access)

                setToken(data.access)
                setUser(user=>({...user,username:user_id,is_authenticated:true}))
                setIsLoggingInUser(false) //user is now done logging in
                navigate("/profile")
           } catch (error) {setIsLoggingInUser(false)}
          
         }
         setIsSigningUp(false)
      
    }catch (error) {
        setIsSigningUp(false)
        if (error.response?.status==401 ||error.response?.status==400){
           setFormErrors(error.response.data)
         }
         else  setAlertMessage({message:"Oops something is wrong",isError:true});
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
        {formErrors.error && <small className="form-detail-error">{formErrors.error}</small>}
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
            <Icon iconName={"phone"} extra={"input-icon"} />
            <input type="phone"
              placeholder="phone"
              name="phone_number" 
              onChange={handleChange}
              />

             {formErrors.phone_number && <small className="form-error">{formErrors.phone_number}</small>}

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

          <div className="input-group">
            <Icon iconName={"lock"} extra={"input-icon"} />
            <input type="password"
              placeholder="confirm password"
              name="password2" 
              onChange={handleChange}
              />

             {formErrors.password2 && <small className="form-error">{formErrors.password2}</small>}

          </div>
          <div className="input-group flex-box">
          <div className="remember-me">
              <input type="checkbox" /> <small>Remember me</small>
            </div>
            <small>Have account ? Login <Link to="/auth/login">Here</Link></small>
          </div>
          <button type="submit">{!isLoggingInUser?(!isSigningUp?"SIGN UP": <>Signing up <Spinner/></>):<>Logging in <Spinner/></>} </button>
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
