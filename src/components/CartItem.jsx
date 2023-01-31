import "./CartItem.css";
import Counter from "./Counter";
import cartService from "../services/cartService"
import { useContext,useState,useEffect, } from "react";
import { ShopContext } from "../shop-context/ShopState";
import Spinner  from "./Spinner"
import ComfimDeleteDialog from "./ComfirmDeleteDialog";



function CartItem({product,item_count,product_uuid}) {
  const [count, setCount] = useState(item_count);
  const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
  const [deleteComfirmed,setDeleteComfirmed] = useState(false)
  const  formatToCurrencyFormat= Intl.NumberFormat()
  const  [productRemove,setProductRemoved] = useState(false)
  const {cartProducts,setCartProducts,products,cartId} = useContext(ShopContext);

  const removeCartItem = () => {
      //display dialog to comfirm item removal from cart
      !productRemove && setDeleteDialogVisible(true) //don't display dialog again after comfirming
  };

  const handleComfirmCartItemDelete = async (product_uuid) =>{
        setDeleteDialogVisible(false);//remove dialog after comfirming
        setProductRemoved(true);//display deleting 
        const {status} = await cartService.removeFromCart(cartId,product_uuid)
        if(status === 204)setCartProducts(cartProducts.filter(product=>product.product_uuid!==product_uuid));
  }
  

  const HandleCountIncrease=()=>{
        cartService.updateCart(cartId,product_uuid,{product_count:count})
        count<10?setCount(count+1):setCount(10);
  }

  const  HandleCountDecrease=()=>{
         cartService.updateCart(cartId,product_uuid,{product_count:count})
         count>1?setCount(count-1):setCount(1);
  }


  return (
    <>
    <div className="cart-item">
        <div className="item-image">
            <img src={product.image_url} alt="..." />
        </div>

       <div className="cart-group">
           <h5>{(product.name).length > 25?`${product.name.slice(0,25)} ...`:product.name}</h5>
           <button onClick={()=>removeCartItem(product_uuid)}>{productRemove?<>Removing  <Spinner/></>:"Remove From Cart"}</button>
       </div>

       <Counter count={count} 
                onCountIncrease={HandleCountIncrease} 
                onCountDecrease={HandleCountDecrease}/>

      <div className="cart-group">
           <h5 className="price">Price<br/><span> { formatToCurrencyFormat.format((product.discounted_price)*count)}</span></h5>
      </div>

    </div>
      <ComfimDeleteDialog message="Do you really want to remove this item from cart?" 
                          title="Remove From Cart"
                          visible={deleteDialogVisible}
                          onCloseDialog={()=>setDeleteDialogVisible(false)}
                          onComfirm={()=>handleComfirmCartItemDelete(product_uuid)}/>
    </>
  );
}

export default CartItem;