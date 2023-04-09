import APIService from "./apiService";
import { apiEndPoint } from "../config.json"


const productsEndPoint = `${apiEndPoint}/products`
const getProducts = () => APIService.get(productsEndPoint + "/");
const getProduct = id => APIService.get(`${productsEndPoint}/${id}/`);
const getPageProducts = page => APIService.get(`${productsEndPoint}/?page=${page}`)
const searchProducts = query => APIService.get(`${productsEndPoint}/?search=${query}`)
const getCategoryProducts = category => APIService.get(`${apiEndPoint}/categories/${category}/products/`);
const getCategoryPageProducts = (category, page) => APIService.get(`${apiEndPoint}/categories/${category}/products/?page=${page}`);
const getPageSearchResults = (page, query) => APIService.get(`${productsEndPoint}/?page=${page}&search=${query}`)
const filterProductsByPrice = (high = 50000, low = 0) => APIService.get(`${productsEndPoint}/?price__lte=${high}&price__gte=${low}`)
const getPageProductsFilteredByPrice = (high = 50000, low = 0, page) => APIService.get(`${productsEndPoint}/?page=${page}&price__lte=${high}&price__gte=${low}`)

export default {
    getProducts,
    getProduct,
    getPageProducts,
    searchProducts,
    getCategoryProducts,
    filterProductsByPrice,
    getPageSearchResults,
    getCategoryPageProducts,
    getPageProductsFilteredByPrice,
}