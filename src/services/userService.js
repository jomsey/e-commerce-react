import APIService from "./apiService";
import {apiEndPoint} from "../config.json"

function getUser(id){
    return APIService.authGet(`${apiEndPoint}/user/${id}/`);
}


export default{getUser}