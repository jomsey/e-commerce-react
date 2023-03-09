import "./OrderItems.css";
import Order from "./Order";
import {useNavigate} from "react-router-dom"
import OrderProducts from "./OrderProducts";
import orderSevice from "../services/orderSevice";
import cartService from "../services/cartService";
import { useState,useContext,useEffect} from "react";
import { ShopContext } from "../shop-context/ShopState";
import ComponentIsLoading from "./ComponentIsLoading";


const OrderItems = ({loading}) => {
  const [orderItems,setOrderItems] = useState([])
  const [orderProducts,setOrderProducts] = useState([])
  const [isDeleting,setIsDeleting] = useState(false)
  const [ordersLoading,setOrdersLoading] = useState(true)
  const navigate = useNavigate()
  const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)


  const HandleViewOrderProducts=async(cartId)=>{
        setShowOrderProducts(true);
        try {
            const {data,status} = await cartService.getCartProducts(cartId)
            setOrderProducts(data.results)
        } catch (error){}  
  }

  useEffect(() => {
    const getUserOrders=async()=>{
        const response = await orderSevice.getUserOrders()
        setOrderItems(response.data.results)
        setOrdersLoading(false)
    } 
    getUserOrders()  
  }, []);

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

             <div className="no-orders">
                  <span>You Have Not Yet Made Any Orders</span>
                  <button onClick={()=>navigate("/products")}>Continue Shopping</button>
            </div>)
     }
     <OrderProducts showItems={showOrderProducts} productsList={orderProducts}/>
    </div>
  );
};

export default OrderItems;