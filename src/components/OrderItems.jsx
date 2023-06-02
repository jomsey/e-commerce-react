import "./OrderItems.css";
import Order from "./Order";
import {useNavigate} from "react-router-dom"
import OrderProducts from "./OrderProducts";
import cartService from "../services/cartService";
import { useState,useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";
import ComponentIsLoading from "./ComponentIsLoading";
import NoContent from './NoContent';
import { ProfileContext } from "../shop-context/useProfileState";


const OrderItems = () => {
      const [orderProducts,setOrderProducts] = useState([])
      const navigate = useNavigate()
      const {showOrderProducts,setShowOrderProducts} = useContext(ShopContext)
      const {orderItems,ordersLoading} = useContext(ProfileContext)

      const HandleViewOrderProducts=async(cartId)=>{
            setShowOrderProducts(true);
            try {
                const {data } = await cartService.getCartProducts(cartId)
                setOrderProducts(data.results)
            } catch (error){}  
      }

    
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
                      <NoContent message="You don't have any orders"><button className="button-overlay"  onClick={()=>navigate("/products")}>Continue Shopping</button></NoContent>)
        }
        
        <OrderProducts 
             showItems={showOrderProducts}
             productsList={orderProducts}
         />
        </div>
      );
};

export default OrderItems;