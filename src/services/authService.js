import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


const getToken=data=>APIService.post(`${apiEndPoint}/token/`,data)
const registerUser=data=>APIService.post(`${apiEndPoint}/user/`,data)

export default {
    getToken,
    registerUser
}