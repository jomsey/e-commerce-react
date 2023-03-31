import "./Alert.css";
import { useEffect,useState } from 'react';


function Alert({message,type="success"}) {
        const [alertVisible,setAlertVisible] = useState(true);

        useEffect(()=>{
            setTimeout(()=>setAlertVisible(false),6000);
        },[])

        return alertVisible? 
                <div className={type==="error"?'alert-message alert-error':'alert-message'}>
                     <span className='message'>{message}</span>
                </div>:null;
}

export default Alert