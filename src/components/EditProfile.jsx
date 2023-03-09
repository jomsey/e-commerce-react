import "./EditProfile.css";
import Icon from "../ui/Icon";


function EditProfile({visible=true}) {
  const handleModalClose=()=>{
    console.log("modal close")
  }

  const modalClasses = visible?"modal-not-visible":"edit-profile-modal modal-not-visible"
  return (
    <div className={modalClasses}>
        <Icon iconName="close" extra="close-modal-btn" onIconClick={handleModalClose}/>
    </div>
  )
}

export default EditProfile