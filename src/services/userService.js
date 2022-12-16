import APIService from "./apiService";
import {apiEndPoint} from "../config.json"

function getUser(id){
    return APIService.get(`${apiEndPoint}/user/${id}/`,{headers:{'Authorization':`token ${localStorage.getItem("token")}`}});
}


export default{getUser}