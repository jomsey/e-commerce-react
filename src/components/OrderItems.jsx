import { useState,useContext } from "react";
import {useNavigate} from "react-router-dom"
import { ShopContext } from "../shop-context/ShopState";
import orders from "../utils/orders";
import Order from "./Order";
import "./OrderItems.css";
import OrderProducts from "./OrderProducts";


const OrderItems = () => {

  const navigate = useNavigate()
  const [orderItems,setOrderItems] = useState([...orders])
  const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)

  const HandleViewOrderProducts=()=>setShowOrderProducts(true);
  const HandleOrderItemCancel=(item)=>setOrderItems(orderItems.filter(orderItem=>orderItem.id !== item.id))

  
  return (
    <div className="orders">
      {orderItems.length>0? orderItems.map(order=>
              <Order 
                orderItem={order}
                key={order.id}  
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
