import Icon from "../ui/Icon"
import UserInfo from "./UserInfo";
import jwtDecode from "jwt-decode"
import EditProfile from "./EditProfile";
import {useState,useEffect} from "react"
import useToken from "../customHooks/useToken";
import userService from "../services/userService";



const ProfileSideBar = () => {
      const [profile,setUserprofile]=useState({});
      const {token} = useToken()
      const {email,username,first_name,last_name,phone_number,address} = profile


      useEffect(() => {
              const getUserProfile=async()=>{
                if (token){
                        const {user_id} = jwtDecode(token)
                        const response = await userService.getUser(user_id)
                        setUserprofile(response.data)
                    }
              }

              getUserProfile()
      }, [])
  
      return (
        <>
         <aside>
              <div className="avatar">
                  <img
                    src="https://thumbs.dreamstime.com/b/user-profile-line-icon-web-avatar-employee-symbol-sign-illustration-design-isolated-white-background-192379539.jpg"
                    alt=""
                  />
              </div>

              <div className="cluster">
                  <div className="user-info">
                          <UserInfo title="First Name" info={first_name}/>
                          <UserInfo title="Last Name" info={last_name}/>
                          <UserInfo title="Address" info={address}/>
                          <UserInfo title="Phone" info={phone_number}/>
                          <UserInfo title="Email" info={email}/>
                  </div>
              </div>

            <span className="profile-edit">Edit Profile</span>
          </aside>

          <EditProfile/>

       </> 
    );
}



export default ProfileSideBar;
