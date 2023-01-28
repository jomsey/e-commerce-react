import "./UserInfo.css"
import Icon from "../ui/Icon"
import TextPlaceholder from "./TextPlaceholder";


function UserInfo({title,info}) {
    return(
      <div className="info-cluster">
                  <h4>{title}</h4>
                  <Icon iconName="pen" extra={"p-edit-icon"}/>
                  {info?
                  <small>{info}</small>:
                  <TextPlaceholder/>}
                </div>
    )
    
  }
  
  export default UserInfo
  