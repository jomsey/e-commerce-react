import Spinner from "./Spinner";
import { useState,useContext} from "react";
import orderService from "../services/orderService";
import { ShopContext } from "../shop-context/ShopState";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";


function Order({orderItem,onViewOrderProducts}) {
          const [isDeleting,setIsDeleting] = useState(false)
          const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
          const {orderItems,setOrderItems,setAlertMessage} = useContext(ShopContext)
          
          const handleConfirmCartItemDelete = async (orderId) =>{
                setDeleteDialogVisible(false);//remove dialog after confirming
                setIsDeleting(true);//display deleting loader
                try{
                  const response = await orderService.deleteUserOrder(orderId)
                  
                  if (response.status === 204) {
                      setIsDeleting(false)
                      setOrderItems(orderItems.filter(order=>order.order_id !== orderId)) //update the current orders list
                      setAlertMessage({message:"Order has been removed successfully"})
                  }
                }
                catch(error){}
            }


          return (
                  <div className="item">
                          <span>
                              <small>ID:</small><br/>#{orderItem.order_id}
                          </span>

                          <span>
                              <small>DATE:</small><br/>{new Date(orderItem.date_made).toLocaleDateString()}
                          </span>

                          <span>
                             <small>STATUS:</small><br/>{orderItem.status}
                          </span>

                         <div className="order-operations-btns">
                               <button className="button-overlay" onClick={onViewOrderProducts}>View Order Items</button>
                               <button className="button-overlay" onClick={()=>!isDeleting && setDeleteDialogVisible(true)}> {isDeleting?<>Canceling<Spinner/></>:"Cancel Order"}</button>
                         </div>

                          <ConfirmDeleteDialog message="Do you really want to cancel this order?" 
                                                title="Cancel Order"
                                                visible={deleteDialogVisible}
                                                onCloseDialog={()=>setDeleteDialogVisible(false)}
                                                onConfirm={()=>handleConfirmCartItemDelete(orderItem.order_id)}/>
                </div>
          )
}


export default Order