import Icon from "../ui/Icon";
import "./Login.css";
import TopBar from './../components/TopBar';
export default function Login() {
  return (
    <><TopBar showToggler={false}/>
    <div className="login">
      <div className="login-container">
        <h1>Sign In</h1>
        <div className="overlay"></div>
        <form>
          <div className="input-group">
            <Icon iconName={"user"} extra={"input-icon"} />
            <input
              type="text"
              maxLength={10}
              placeholder="username"
              name="username"
            />
          </div>
          <div className="input-group">
            <Icon iconName={"lock"} extra={"input-icon"} />
            <input type="password" placeholder="password" name="username" />
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
