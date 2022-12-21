import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


const getToken=data=>APIService.post(`${apiEndPoint}/token/`,data)
const registerUser=data=>console.log("registering")

export default {
    getToken,
    registerUser
}