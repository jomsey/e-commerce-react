import { useState,useContext,useEffect} from "react";
import orderSevice from "../services/orderSevice";
import { ShopContext } from "../shop-context/ShopState";
import ComfimDeleteDialog from "./ComfirmDeleteDialog";
import Spinner from "./Spinner";


function Order({orderItem,onViewOrderProducts}) {
  const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
  const [deleteComfirmed,setDeleteComfirmed] = useState(false)
  const [isDeleting,setIsDeleting] = useState(false)
  const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)
  
  const handleComfirmCartItemDelete = async (order_id) =>{
        setDeleteDialogVisible(false);//remove dialog after comfirming
        setIsDeleting(true);//display deleting loader

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
    <button onClick={()=>!isDeleting && setDeleteDialogVisible(true)}> {isDeleting?<> <Spinner/></>:"Cancel Order"}</button>

    <ComfimDeleteDialog message="Do you really want to cancel this order?" 
                          title="Cancel Order"
                          visible={deleteDialogVisible}
                          onCloseDialog={()=>setDeleteDialogVisible(false)}
                          onComfirm={()=>handleComfirmCartItemDelete(orderItem.order_id)}/>
  </div>
  )
}


export default Order