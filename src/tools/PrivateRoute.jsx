import { Navigate} from 'react-router-dom';
import jwtDecode from "jwt-decode"


export default function PrivateRoute({ children , user })
       {
            if(user.is_authenticated){return children;}
            return <Navigate to="/auth/login"/>
        
      }
    
    
  
