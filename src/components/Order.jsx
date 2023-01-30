import { useState,useContext,useEffect} from "react";
import orderSevice from "../services/orderSevice";
import { ShopContext } from "../shop-context/ShopState";
import Spinner from "./Spinner";

function Order({orderItem,onOrderItemCancel,onViewOrderProducts,deleting}) {

  const [isDeleting,setIsDeleting] = useState(false)
  const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)
  

  const  HandleOrderItemCancel= async(order_id)=>{
    setIsDeleting(true)
     try{
      const response = await orderSevice.deleteUserOrder(order_id)
      if (response.status === 204) {
        setIsDeleting(false)
      }
     }
     catch(error){}
}

  return (
    <div className="item">
    <span>
      <small>
        ID:
        <br />
      </small>
      #{orderItem.order_id}
    </span>
    <span>
  
      <small>
        DATE:
        <br />
      </small>
     {new Date(orderItem.date_made).toLocaleDateString()}
    </span>
    <span>
      <small>
        STATUS:
        <br />
      </small>
     {orderItem.status}
    </span>
    <button onClick={onViewOrderProducts}>View Order Items</button>
    <button onClick={()=>HandleOrderItemCancel(orderItem.order_id)}> {isDeleting?<>Deleting <Spinner/></>:"Delete Order"}</button>
  </div>
  )
}


export default Order