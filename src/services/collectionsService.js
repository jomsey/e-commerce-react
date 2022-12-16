import APIService from "./apiService";
import {apiEndPoint} from "../config.json"

function getCollections(){
    return APIService.get(`${apiEndPoint}/collections/`)
}

export default getCollections