import "./OrderItems.css";
import Order from "./Order";
import {useNavigate} from "react-router-dom"
import OrderProducts from "./OrderProducts";
import cartService from "../services/cartService";
import { useState,useContext,useEffect} from "react";
import { ShopContext } from "../shop-context/ShopState";
import ComponentIsLoading from "./ComponentIsLoading";
import axios from "axios";
import {apiEndPoint} from "../config.json"
import useToken from "../customHooks/useToken";
import NoContent from './NoContent';




const OrderItems = ({loading}) => {
  const [orderProducts,setOrderProducts] = useState([])
  const {token} = useToken()
  const [ordersLoading,setOrdersLoading] = useState(true)
  const navigate = useNavigate()
  const {showOrderProducts,setShowOrderProducts,orderItems,setOrderItems} = useContext(ShopContext)
  const instance = axios.create({headers: {"Authorization": `Bearer ${token}`}});


  const HandleViewOrderProducts=async(cartId)=>{
        setShowOrderProducts(true);
        try {
            const {data } = await cartService.getCartProducts(cartId)
            setOrderProducts(data.results)
        } catch (error){}  
  }

  useEffect(() => {
    const getUserOrders=async()=>{
        const response = await instance.get(`${apiEndPoint}/orders/`)
        setOrderItems(response.data.results)
        setOrdersLoading(false)
      
    } 
    getUserOrders()  
  }, [orderItems]);

  return (
    <div className="orders">
      {ordersLoading
              ?<ComponentIsLoading/>
              :(orderItems.length>0? orderItems.map(order=>
                <Order 
                  orderItem={order}
                  key={order.order_id}  
                  onViewOrderProducts={()=>HandleViewOrderProducts(order.cart)}
    
                  /> ):
<NoContent message="You don't have any orders">

                  <button onClick={()=>navigate("/products")}>Continue Shopping</button>
</NoContent>)
     }
     <OrderProducts showItems={showOrderProducts} productsList={orderProducts}/>
    </div>
  );
};

export default OrderItems;