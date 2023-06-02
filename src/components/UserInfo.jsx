import "./UserInfo.css"
import Icon from "../ui/Icon"
import TextPlaceholder from "./TextPlaceholder";
import {useState} from "react"
import ToolTip from "./ToolTip";


function UserInfo({title,info,editable=true}) {
    const [editorVisible,setEditorVisible] =  useState(false)
    const handleEditUserInfo = ()=>{
        setEditorVisible(true)
    }

    const handleUserInfoSubmit=e=>{
      e.preventDefault()
      setEditorVisible(false)
    }

    return(
      <div className="info-cluster">
                  <h4>{title}</h4>
                  {(editable && info  !==undefined) &&
                   <Icon iconName="pen" extra={"p-edit-icon"} onIconClick={handleEditUserInfo}>
                       <ToolTip message="edit"/>
                   </Icon>
                  }
                  {info  !== undefined && !editorVisible &&
                  <small>{info}</small>}
                  {info === undefined  && <TextPlaceholder/>}

                 {
                  editorVisible && <div className="edit-user-info-form">
                  <form onSubmit={handleUserInfoSubmit}>
                    <input name={info} placeholder={title} onChange={()=>1}/>
                    <button type="submit"><Icon iconName="check" extra="done-edit-icon"/></button>
                  </form>
               </div>
                 }
      </div>
    )
    
  }
  
  export default UserInfo
  