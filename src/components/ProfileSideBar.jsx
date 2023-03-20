import UserInfo from "./UserInfo";
import jwtDecode from "jwt-decode"
import EditProfile from "./EditProfile";
import {useState,useEffect} from "react"
import useToken from "../customHooks/useToken";
import axios from "axios";
import {apiEndPoint} from "../config.json"




const ProfileSideBar = () => {
      const [profile,setUserprofile]=useState({});
      const {token} = useToken()
      const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});
      const {email,username,first_name,last_name,phone_number,address} = profile
      const [editModalVisible,setEditModalVisible] = useState(false)

 
      useEffect(() => {
        const getUserProfile=async()=>{
          if (token){
            const {user_id} = jwtDecode(token)
            const response = await instance.get(`${apiEndPoint}/user/${user_id}/`)
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
                    src="./avatar.jpg"
                    alt="...."
                  />
              </div>

              <div className="cluster">
                  <div className="user-info">
                          <UserInfo title="Username" info={username} editable={false}/>
                          <UserInfo title="First Name" info={first_name}/>
                          <UserInfo title="Last Name" info={last_name}/>
                          <UserInfo title="Address" info={address}/>
                          <UserInfo title="Phone" info={phone_number}/>
                          <UserInfo title="Email" info={email}/>
                  </div>
              </div>

            <span className="profile-edit" onClick={()=>setEditModalVisible(true)}>Edit Profile</span>
          </aside>

          <EditProfile visible={0}/>

       </> 
    );
}



export default ProfileSideBar;
