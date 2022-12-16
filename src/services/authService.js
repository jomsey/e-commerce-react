import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


function getToken(){
    return localStorage.getItem("token")
}

function loginUser(){

}

function logoutUser(){
    
}


export default {getToken}