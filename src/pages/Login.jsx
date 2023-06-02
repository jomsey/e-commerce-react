import "./Auth.css";
import Icon from "../ui/Icon";
import jwtDecode from "jwt-decode"
import {useState,useContext} from "react"
import TopBar from './../components/TopBar';
import useToken from "../customHooks/useToken";
import Spinner from  './../components/Spinner';
import authService from "../services/authService";
import { useNavigate,Link} from "react-router-dom";
import { ShopContext} from "../shop-context/ShopState"


export default function Login() {
  const {setToken} = useToken()
  const navigate = useNavigate()
  const [formData,setFormData] = useState({})
  const [formErrors,setFormErrors] = useState({})
  const [isLoggingIn,setIsLoggingIn]=useState(false)
  const {setUser,setAlertMessage} = useContext(ShopContext)


  const HandleFormSubmit=async(e)=>{
        e.preventDefault()
        setIsLoggingIn(true) //show the log in progress loader

        try { 
            const {status,data}= await authService.getToken(formData);
  
            if (status === 200){
                const {user_id} = jwtDecode(data.access)
                setToken(data.access)
                setUser(user=>({...user,username:user_id,is_authenticated:true}))
                navigate("/profile")
                setIsLoggingIn(false) //stop the login progress loader
            }        
        }

        catch (error) {
            setIsLoggingIn(false) //stop the login progress loader

            if (error.response?.status==401 ||error.response?.status==400){
                setFormErrors(error.response.data)
            }
            else{
              setAlertMessage({message:"Oops something is wrong",isError:true})
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
            />
            {formErrors.username && <small className="form-error">{formErrors.username}</small>}
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
              Sign in
              {isLoggingIn && <Spinner/>}
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
