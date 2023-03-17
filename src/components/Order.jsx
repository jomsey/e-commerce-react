import { useState,useContext,useEffect} from "react";
import orderService from "../services/orderSevice";
import { ShopContext } from "../shop-context/ShopState";
import ConfirmDeleteDialog from "./ComfirmDeleteDialog";
import Spinner from "./Spinner";


function Order({orderItem,onViewOrderProducts}) {
  const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
  const [isDeleting,setIsDeleting] = useState(false)
  const {showOrderProducts,setShowOrderProducts,orderItems,setOrderItems} = useContext(ShopContext)
  
  const handleConfirmCartItemDelete = async (id) =>{
        setDeleteDialogVisible(false);//remove dialog after confirming
        setIsDeleting(true);//display deleting loader
        try{
          const response = await orderService.deleteUserOrder(id)
          if (response.status === 204) {
            setIsDeleting(false)
            setOrderItems(orderItems.filter(order=>order.order_id !== id)) //update the current orders list
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
    <button onClick={()=>!isDeleting && setDeleteDialogVisible(true)}> {isDeleting?<>Canceling<Spinner/></>:"Cancel Order"}</button>

    <ConfirmDeleteDialog message="Do you really want to cancel this order?" 
                          title="Cancel Order"
                          visible={deleteDialogVisible}
                          onCloseDialog={()=>setDeleteDialogVisible(false)}
                          onConfirm={()=>handleConfirmCartItemDelete(orderItem.order_id)}/>
  </div>
  )
}


export default Order