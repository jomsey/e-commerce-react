import userService from "../services/userService";
import {useState,useEffect} from "react"
import useToken from "../customHooks/useToken";
import jwtDecode from "jwt-decode"


const ProfileSideBar = () => {
  const [profile,setUserprofile]=useState({});
  const {token} = useToken()

  const getUserProfile=async()=>{
    const {user_id} = jwtDecode(token)
    const response = await userService.getUser(user_id)
    setUserprofile(response.data)
  }
  
  useEffect(() => {
  getUserProfile()
  }, [])
  
    return (
        <aside>
          <div className="avatar">
            <img
              src="https://i.pcmag.com/imagery/articles/0618BTBt5ZLG4DHKsoHFMex-1..v1657185098.jpg"
              alt=""
            />
          </div>
          <div className="cluster">
            <div className="user-info">
              <div className="info-cluster">
                <h4>First Name</h4>
                <small>{profile.first_name}</small>
              </div>
              <div className="info-cluster">
                <h4>Last Name</h4>
                <small>{profile.last_name}</small>
              </div>
              <div className="info-cluster">
                <h4>Address</h4>
                <small>{profile.address}</small>
              </div>

              <div className="info-cluster">
                <h4>Phone</h4>
                <small>{profile.phone_number}</small>
              </div>

              <div className="info-cluster">
                <h4>Email</h4>
                <small>{profile.email}</small>
              </div>
            </div>
            
          </div>
        </aside>
    );
}

export default ProfileSideBar;
