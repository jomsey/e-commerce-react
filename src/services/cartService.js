import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


const cartEndPoint=`${apiEndPoint}/cart/`
const createCart=()=>APIService.post(cartEndPoint);
const getCartProducts=cartId=>APIService.get(`${cartEndPoint}${cartId}/products/`)
const addToCart=(data,cartId)=>APIService.post(`${cartEndPoint}${cartId}/products/`,data)
const updateCart=(cartId,productId,data)=>APIService.patch(`${cartEndPoint}${cartId}/products/${productId}/`,data)
const removeFromCart = (cartId,product_uuid) =>APIService.remove(`${cartEndPoint}${cartId}/products/${product_uuid}/`)


export default {addToCart,
                removeFromCart,
                createCart,
                getCartProducts,
                updateCart}
