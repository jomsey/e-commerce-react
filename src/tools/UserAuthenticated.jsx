import { Navigate } from 'react-router-dom';

export default function UserAuthenticated({children,user}) {
       //redirect user to profile page if  authenticated
       if(user.is_authenticated){return <Navigate to="/profile"/>};
       return children;
    }
    
   
