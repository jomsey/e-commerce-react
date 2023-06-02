import Icon from "../ui/Icon";
import UserInfo from './UserInfo';
import EditProfile from "./EditProfile";
import {useState,useContext} from "react"
import useToken from "../customHooks/useToken";
import { ShopContext } from "../shop-context/ShopState";
import { ProfileContext } from "../shop-context/useProfileState";


const UserInfoGroup = () => {
      const {setToken} = useToken()
      const {setUser} = useContext(ShopContext);
      const {profile} = useContext(ProfileContext)
      const [editModalVisible,setEditModalVisible] = useState(false)
      const {email,username,first_name,last_name,phone_number,address} = profile

      const handleLogout=()=>{
        setUser({username:null,is_authenticated:false})
        setToken(null)
      }

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



export default UserInfoGroup;
