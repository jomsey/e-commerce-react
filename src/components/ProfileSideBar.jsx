import UserInfo from "./UserInfo";
import jwtDecode from "jwt-decode"
import EditProfile from "./EditProfile";
import {useState,useEffect,useContext} from "react"
import useToken from "../customHooks/useToken";
import axios from "axios";
import {apiEndPoint} from "../config.json"
import Icon from "../ui/Icon";
import { ShopContext } from "../shop-context/ShopState";




const ProfileSideBar = () => {
      const [profile,setUserprofile]=useState({});
      const {token,setToken} = useToken()
      const {setUser} = useContext(ShopContext);
      const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});
      const {email,username,first_name,last_name,phone_number,address} = profile
      const [editModalVisible,setEditModalVisible] = useState(false)

      const handleLogout=()=>{
        setUser({username:null,is_autheticated:false})
        setToken(null)
      }

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
                  <div className="upload-image-overlay">
                  <Icon iconName="image"/>
                  </div>
                  <img
                    src="./avatar.jpg"
                    alt="...."
                  />
              </div>

           { username && <span className="profile-edit" onClick={()=>setEditModalVisible(true)}>Edit Profile</span>}
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
            <span className="logout" onClick={handleLogout}>  <Icon iconName="sign-out"/> Logout</span>
          </aside>

          <EditProfile visible={editModalVisible} onModalClose={()=>setEditModalVisible(false)}/>

       </> 
    );
}



export default ProfileSideBar;
