import axios from "axios";

const token = localStorage.getItem("token")
const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});
const get = apiEndPoint =>axios.get(apiEndPoint);
const post = (apiEndPoint,data)=>axios.post(apiEndPoint,data)
const remove = (apiEndPoint)=>axios.delete(apiEndPoint)
const patch = (apiEndPoint,data)=>axios.patch(apiEndPoint,data)
const authGet = apiEndPoint =>instance.get(apiEndPoint);
const authPost = (apiEndPoint,data)=>instance.post(apiEndPoint,data)
const authDelete = (apiEndPoint)=>instance.delete(apiEndPoint)
const authPatch = (apiEndPoint,data)=>instance.patch(apiEndPoint,data)

// axios.interceptors.response.use(null,(error)=> {
//    const {status} = error.response;
//    if (status>=500)console.log("Oops something is Wrong")
//    return Promise.reject(error);
//   });

const APIService = {get,post,
                    remove,patch,
                    authGet,authPost,
                    authDelete,authPost}

export  default APIService


