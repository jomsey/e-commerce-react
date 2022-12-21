import {useState} from "react";
import jwtDecode from "jwt-decode"


export default function useToken(){
    const jwt = localStorage.getItem("token");
    const [token,saveToken] = useState(jwt);

    const setToken=token=>{
            localStorage.setItem("token",token);
            return saveToken(prev=>prev=token)
        
    }
    
    return {setToken,token}
}

