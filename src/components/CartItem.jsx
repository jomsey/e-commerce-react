import "./CartItem.css";
import Counter from "./Counter";
import cartService from "../services/cartService"
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import Spinner  from "./Spinner"
import ConfirmDeleteDialog from "./ComfirmDeleteDialog";


function CartItem({product,item_count,product_uuid}) {
      const [count, setCount] = useState(item_count);
      const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
      const  formatToCurrencyFormat= Intl.NumberFormat()
      const  [productRemove,setProductRemoved] = useState(false)
      const {cartProducts,setCartProducts,cartId,setCartPriceTotal} = useContext(ShopContext);
      const [updatingItemCount,setUpdatingItemItemCount] = useState(false)


      const getCartTotal = () =>{
            let cartTotal =  cartProducts.reduce((total, {product,product_count}) => 
                            total + (product !== undefined && product.discounted_price*product_count), 0);
            setCartPriceTotal(Math.floor(cartTotal))
      }

      const removeCartItem = () => {
            //display dialog to confirm item removal from cart
            !productRemove && setDeleteDialogVisible(true) //don't display dialog again after confirming
      };

      const handleConfirmCartItemDelete = async (product_uuid) =>{
            setDeleteDialogVisible(false);//remove dialog after confirming
            setProductRemoved(true);//display deleting 
            const {status} = await cartService.removeFromCart(cartId,product_uuid)
            if(status === 204)setCartProducts(cartProducts.filter(product=>product.product_uuid!==product_uuid));
      }
      

      const HandleCountIncrease= async()=>{
            setUpdatingItemItemCount(true)
            try {
                const {status} = await cartService.updateCart(cartId,product_uuid,{product_count:count})
                if (status === 200){
                    setUpdatingItemItemCount(false)
                    count<10?setCount(count+1):setCount(10);
                }
                setUpdatingItemItemCount(false)
            } catch (error) {
              setUpdatingItemItemCount(false)
            }
      }

      const  HandleCountDecrease=async()=>{
            setUpdatingItemItemCount(true)
            try {
                  const {status} = await cartService.updateCart(cartId,product_uuid,{product_count:count})
                  if (status === 200){
                      setUpdatingItemItemCount(false)
                      count>1?setCount(count-1):setCount(1);
                      getCartTotal() //update the cart total price

                  }
                  setUpdatingItemItemCount(false)
            } catch (error) {
              setUpdatingItemItemCount(false)
            }
            
      }
      
      getCartTotal() //update the cart total price


      return (
        <>
         {
            product !== undefined &&
            <>
            <div className="cart-item">
            <div className="cart-group right">
                  <div className="item-image">
                       <img src={product.image_url} alt="..." />
                  </div>

                  <h5>{(product.name).length > 25?`${product.name.slice(0,30)} ...`:product.name}</h5>
            </div>
          <div className="cart-group btns">
              <button onClick={removeCartItem}>{productRemove?<>Removing  <Spinner/></>:"Remove From Cart"}</button>
          <Counter 
                count={count} 
                onCountIncrease={HandleCountIncrease} 
                onCountDecrease={HandleCountDecrease}
                updating={updatingItemCount}/>
          </div>


          <div className="cart-group">
              <h5 className="price">Price<br/><span> { formatToCurrencyFormat.format((Math.floor(product.discounted_price)*count))}</span></h5>
          </div>

        </div>

          <ConfirmDeleteDialog 
                        message="Do you really want to remove this item from cart?" 
                        title="Remove From Cart"
                        visible={deleteDialogVisible}
                        onCloseDialog={()=>setDeleteDialogVisible(false)}
                        onConfirm={()=>handleConfirmCartItemDelete(product_uuid)}/>
                        
            </>
         }
        
        </>
      );
}

export default CartItem;
