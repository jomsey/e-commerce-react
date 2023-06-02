import "./ComfirmDeleteDialog.css"
import Icon from "../ui/Icon";

function ConfirmDeleteDialog({title,message,onConfirm,visible,onCloseDialog}) {
  return (
   <> 
    {visible &&
     <div className="confirm-delete">
          <Icon iconName="close" extra="confirm-delete-close-btn" onIconClick={onCloseDialog}/>
          <h5>{title}</h5>
          <p>{message}</p>
          <button onClick={onConfirm} ><Icon iconName="trash"/> Remove Item </button>
     </div>
    }
   </>
  )
}

export default ConfirmDeleteDialog