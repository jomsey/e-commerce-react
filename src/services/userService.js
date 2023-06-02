import APIService from "./apiService";
import { apiEndPoint } from "../config.json"

const getUser = id => APIService.authGet(`${apiEndPoint}/user/${id}/`);



export default { getUser }