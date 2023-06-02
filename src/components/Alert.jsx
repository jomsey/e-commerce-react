import "./Alert.css";
import { useEffect,useState,useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from "../shop-context/ShopState";


function Alert({message,isError,type}) {
        const [alertVisible,setAlertVisible] = useState(true);
        const {setAlertMessage} = useContext(ShopContext)

        useEffect(()=>{
            setTimeout(()=>{
                  setAlertVisible(false)
                  setAlertMessage(null)//remove message after display
        },6000); 
        },[])
        

        return alertVisible? 
                <div className={type==="info"?"alert-message alert-info":(isError?'alert-message alert-error':'alert-message')}>
                     <span className='message'>{message}</span>
                </div>:null;
}

Alert.propTypes = {
      message:PropTypes.string.isRequired,
      isError:PropTypes.bool
}

export default Alert