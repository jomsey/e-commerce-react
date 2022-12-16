import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


function createCart(){
    return APIService.post(`${apiEndPoint}/cart/`);
}

function getCartProducts(cartId){
    return  APIService.get(`${apiEndPoint}/cart/${cartId}/products/`)
}

function addToCart(data,cartId){
    return  APIService.post(`${apiEndPoint}/cart/${cartId}/products/`,data)
}

function updateCart(cartId,productId,data){
    return  APIService.patch(`${apiEndPoint}/cart/${cartId}/products/${productId}/`,data)
}

function removeFromCart(cartId,product_uuid){
    return  APIService.remove(`${apiEndPoint}/cart/${cartId}/products/${product_uuid}/`)
}


export default {addToCart,
                removeFromCart,
                createCart,
                getCartProducts,
                updateCart}
