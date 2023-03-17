import "./EditProfile.css";
import Icon from "../ui/Icon";
import {useState} from "react"


function EditProfile({visible}) {
  const [modelVisible,setModelVisible] = useState(visible)
 
  const modalClasses = modelVisible?"edit-profile-modal":"edit-profile-modal modal-not-visible"
  return (
    <div className={modalClasses}>
        <Icon iconName="close" extra="close-modal-btn" onIconClick={()=>setModelVisible(false)}/>
    </div>
  )
}

export default EditProfile