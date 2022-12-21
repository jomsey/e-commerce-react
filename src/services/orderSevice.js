import APIService from "./apiService";
import {apiEndPoint} from "../config.json"

const ordersEndPoint=`${apiEndPoint}/orders/`
const createUserOrder = (card_id)=>APIService.post(ordersEndPoint,card_id);
const getUserOrder = (order_id)=>APIService.get(ordersEndPoint,order_id);
const updateUserOrder= (order_id,data)=>APIService.patch(ordersEndPoint,order_id,data);
const deleteUserOrder = (order_id)=>APIService.delete(ordersEndPoint,order_id);


export default {
    createUserOrder,
    getUserOrder,
    updateUserOrder,
    deleteUserOrder
}
