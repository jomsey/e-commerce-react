import "./ComfirmDeleteDialog.css"
import Icon from "../ui/Icon";
import {useState} from "react";

function ComfimDeleteDialog({title,message,onComfirm,visible,onCloseDialog}) {
  return (
   <> 
    {visible &&
     <div className="comfirm-delete">
          <Icon iconName="close" extra="comfirm-delete-close-btn" onIconClick={onCloseDialog}/>
          <h5>{title}</h5>
          <p>{message}</p>
          <button onClick={onComfirm}><Icon iconName="trash"/> Remove Item </button>
     </div>
    }
   </>
  )
}

export default ComfimDeleteDialog