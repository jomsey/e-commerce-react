import PropTypes from 'prop-types'
import "./Alert.css";
import { useEffect,useState,useContext } from 'react';

function AlertUsable({message,type="success"}) {
        const successBadge = "alert-success"
        const infoBadge = "alert-info"
        const warningBadge = "alert-error"

        const alertClass = type === "info"?infoBadge:type==="error"?
                           warningBadge:type==="success"?successBadge:null;

                         

        return (
                    <div className={`${alertClass} alert-message`}>
                            <span className='message'>{message}</span>
                    </div>
        )
}

AlertUsable.propTypes = {
    message:PropTypes.string,
    type:PropTypes.string
}

export default AlertUsable
