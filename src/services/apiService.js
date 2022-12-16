import axios from "axios";


// axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem("token")}`
const get = apiEndPoint =>axios.get(apiEndPoint);
const post = (apiEndPoint,data)=>axios.post(apiEndPoint,data)
const remove = (apiEndPoint)=>axios.delete(apiEndPoint)
const patch = (apiEndPoint,data)=>axios.patch(apiEndPoint,data)



const APIService = {get,post,remove,patch}

export  default APIService


