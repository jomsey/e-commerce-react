import "./cartDetails.css";
import TopBar from "./../components/TopBar";
import CartItem from "../components/CartItem";
import { useContext} from "react";
import { ShopContext } from "../shop-context/ShopState";
import RecentlyViewedProducts from "../components/RecentlyViewedProducts";
import CartSummary from "../components/CartSummary";
import ComponentIsLoading from './../components/ComponentIsLoading';
import NoContent from './../components/NoContent';
import {useNavigate} from "react-router-dom"
import { CartContext } from "../shop-context/cartState";
import OffCanvas from "../components/OffCanvas";
import CategoryList from './../components/CategoryList';


function CartDetails() {
  const {cartProducts,cartItemsLoading} = useContext(ShopContext);
  const navigate = useNavigate()
  return (
    <CartContext.Provider value={{}}>
      <OffCanvas>
            <CategoryList/>
      </OffCanvas>
      <TopBar useMobileSideNav={true} />
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
             )):
             <NoContent message="Your cart is empty">
                    <button className="button-overlay"  onClick={()=>navigate("/products")}>Continue Shopping</button>
              </NoContent>)

          }

        </div>

        {cartProducts.length> 0 && <CartSummary products={cartProducts}/>}
        
      </div>

     <RecentlyViewedProducts/>

    </CartContext.Provider>
  );
}

export default CartDetails;
