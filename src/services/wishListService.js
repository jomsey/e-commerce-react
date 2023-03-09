import APIService from "./apiService";
import {apiEndPoint} from "../config.json"


const wishListEndPoint=`${apiEndPoint}/wish_list/`
const getSavedProducts = wishListId =>APIService.get(`${wishListEndPoint+wishListId}/wish_list_products/`)
const saveProduct = (product)=>APIService.post(wishListEndPoint,product)
const deleteSavedProduct = (productId,wishListId)=>APIService.remove(`${wishListEndPoint+wishListId}/wish_list_products/${productId}/`)