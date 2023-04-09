import React from 'react'
import "./OffCanvas.css"
import Icon from '../ui/Icon'
import {ShopContext} from "../shop-context/ShopState";


function OffCanvas({children}) {
          const {mobileOffCanvasOpen,setMobileOffCanvasOpen} = React.useContext(ShopContext);

          return (
              <div className={mobileOffCanvasOpen?'off-canvas':'off-canvas off-canvas-closed'}>
                  <Icon iconName="close" extra="off-canvas-close-icon" onIconClick={()=>setMobileOffCanvasOpen(false)}/>
                  {children}
              </div>
          )
}

export default OffCanvas