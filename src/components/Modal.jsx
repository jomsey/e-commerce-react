import React from 'react'
import "./Modal.css"
import Icon from './../ui/Icon';


function Modal({visible,children,onModalClose}) {
  return (
    <div className={visible?"modal-container":"modal-container modal-container-not-visible"}>
        <div className="overlay">
        <Icon iconName="close" extra="close-modal-btn" onIconClick={onModalClose}/>
        {children}
        </div>
    </div>
  )
}

export default Modal