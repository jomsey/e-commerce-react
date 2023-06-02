import React from 'react'
import Icon from './../ui/Icon';
import { ShopContext } from "../shop-context/ShopState";


function Message({messageObj}) {
        const [messagesFullyVisible,setMessageFullyVisible] = React.useState(false)
        const {setAlertMessage} = React.useContext(ShopContext);


        return (
            <div className="single-message-container" onClick={()=>!messagesFullyVisible && setMessageFullyVisible(true)}>
                    <div className="message-header">
                        <small className="time">2012-49-4</small>
                    </div>
                    <div className="message-text">
                            <div className="message-control-icons">
                            <div className="toggle-message-close-state-icons">
                            <Icon iconName={messagesFullyVisible?"chevron-up":"chevron-down" }extra="chevron" onIconClick={()=>messagesFullyVisible ?setMessageFullyVisible(false):setMessageFullyVisible(true)}/>
                            </div>
                            <Icon iconName="trash" onIconClick={()=>setAlertMessage({message:"Delete Functionality Not Yet Implemented",type:"info"})}/>
                            </div>
                            {
                                !messagesFullyVisible?
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui recusandae nihil, ipsam ipsa ut deleniti nulla eum incidunt! Tempora, ut ...</p>:
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae maxime, qui earum error eius nihil nisi reiciendis debitis! Rem veritatis at et distinctio nesciunt doloribus exercitationem laudantium quia eligendi! Saepe, sunt eius? Nobis accusamus neque rem fugit provident vitae.</p>
                            }
                    </div>
                    
                </div>
        )
}

export default Message