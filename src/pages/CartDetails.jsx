import "./cartDetails.css";
import TopBar from "./../components/TopBar";
import CartItem from "../components/CartItem";
import { useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import CartSummary from "../components/CartSummary";
import ComponentIsLoading from './../components/ComponentIsLoading';


function CartDetails() {
  const {cartProducts,cartItemsLoading} = useContext(ShopContext);
  
  return (
    <>
      <TopBar showToggler={true} />
      <div className="cart-details">
        <div className="cart-items">
          <h4>Shopping Cart</h4>

          {
           cartItemsLoading?
           <ComponentIsLoading/>:
           (cartProducts.length > 0 
            ? (cartProducts.map(({product,product_count,product_uuid}) => 
                                 <CartItem
                                           product={product}
                                           key={product_uuid}
                                           item_count={product_count}
                                           product_uuid={product_uuid}/>
             ))
             :<h3 className="cart-empty-text">No Items To Display</h3>)
          }

        </div>

        {cartProducts.length> 0 && <CartSummary products={cartProducts}/>}
        
      </div>

     <RecentlyViewedProducts/>

    </>
  );
}

export default CartDetails;
