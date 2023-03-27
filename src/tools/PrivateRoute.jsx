import { Navigate} from 'react-router-dom';

export default function PrivateRoute({ children , user})
       {
            if(user.is_authenticated)return children;
            else return <Navigate to="/auth/login"/>;
        
      }
    
    
  
