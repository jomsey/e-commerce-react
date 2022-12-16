import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


 function getProducts(){
    return APIService.get(`${apiEndPoint}/products/`);
}

function searchProducts(){

}

function filterProducts(){

}

function getProduct(id){
    return APIService.get(`${apiEndPoint}/products/${id}`);
}

export default {
    getProducts,
    getProduct
}