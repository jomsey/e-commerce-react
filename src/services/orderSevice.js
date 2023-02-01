import APIService from "./apiService";
import {apiEndPoint} from "../config.json"

const ordersEndPoint=`${apiEndPoint}/orders/`
const getUserOrders = ()=>APIService.authGet(ordersEndPoint);
const createUserOrder = (card_id)=>APIService.authPost(ordersEndPoint,{cart:card_id});
const updateUserOrder= (order_id,data)=>APIService.authPatch(ordersEndPoint,order_id,data);
const deleteUserOrder = (order_id)=>APIService.authDelete(`${ordersEndPoint+order_id}`);


export default {
    createUserOrder,
    getUserOrders,
    updateUserOrder,
    deleteUserOrder
}
