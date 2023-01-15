import "./OrderItems.css";
import Order from "./Order";
import {useNavigate} from "react-router-dom"
import OrderProducts from "./OrderProducts";
import orderSevice from "../services/orderSevice";
import { useState,useContext,useEffect} from "react";
import { ShopContext } from "../shop-context/ShopState";


const OrderItems = ({orders}) => {

  const navigate = useNavigate()
  const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)

 
  const HandleViewOrderProducts=()=>setShowOrderProducts(true);
  const HandleOrderItemCancel=(item)=>setOrderItems(orderItems.filter(orderItem=>orderItem.id !== item.id))

  
  return (
    <div className="orders">
      {orders.length>0? orders.map(order=>
              <Order 
                orderItem={order}
                key={order.order_id}  
                onOrderItemCancel={()=>HandleOrderItemCancel(order)}
                onViewOrderProducts={HandleViewOrderProducts}
  
                /> ):
      <div className="no-orders">
         <span>You Have Not Yet Made Any Orders</span>
         <button onClick={()=>navigate("/products")}>Continue Shopping</button>
      </div>
     }
     <OrderProducts showItems={showOrderProducts}/>
    </div>
  );
};

export default OrderItems;
