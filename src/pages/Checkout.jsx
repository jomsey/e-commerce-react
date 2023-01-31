import "./Checkout.css";
import TopBar from "../components/TopBar";
import ComfimDeleteDialog from "../components/ComfirmDeleteDialog";
import Spinner  from "../components/Spinner"
import { useContext,useState} from "react";
import { ShopContext } from "../shop-context/ShopState";
import cartService from "../services/cartService"



function CheckOut() {
  const {cartProducts,setCartProducts} = useContext(ShopContext);
  const [deleteDialogVisible,setDeleteDialogVisible] = useState(false)
  const [deleteComfirmed,setDeleteComfirmed] = useState(false)
  const  [productRemove,setProductRemoved] = useState(false)


const removeCartItem = () => {
    //display dialog to comfirm item removal from cart
    // !productRemove &&
    
     setDeleteDialogVisible(true) //don't display dialog again after comfirming
};

const handleComfirmCartItemDelete = async (product_uuid) =>{
      setDeleteDialogVisible(false);//remove dialog after comfirming
      setProductRemoved(true);//display deleting 
      const {status} = await cartService.removeFromCart(cartId,product_uuid)
      if(status === 204)setCartProducts(cartProducts.filter(product=>product.product_uuid!==product_uuid));
}


  return (
    <>
      <TopBar showToggler={true} />
      <div className="check-out">
        <h3>Order Summary</h3>
        <div className="info">
          <div className="bunch">
            <div className="personal-info">
                <h4>Your Information</h4> <span>Edit</span>
                <small>FIRST NAME</small>
                <br />
                <span>Muwwanguzi</span>
                <br />
                <small>SECOND NAME</small>
                <br />
                <span>Joseph</span>
                <br />
                <small>EMAIL</small>
                <br />
                <span>muwanguzijoseph75@gmail.con</span>
                <br />
                <small>PHONE</small>
                <br />
                <span>+256 754 608 152</span>
            </div>
            <div className="payment-info">
              <h4>Payment Information</h4> <span>Edit</span>
              <span>MPESA</span>
            </div>
          </div>

          <div className="bunch">
              <div className="shipping-address-info">
                  <h4>Shipping Address</h4> <span>Edit</span>
                  <span>Kampala , Uganda</span>
                  <br />
                  <span>Kabaka Anjagala,rd</span>
                  <br />
                  <span>William st</span>
                  <br />
                  <span>Uganda</span>
              </div>

              <div className="billing-address-info">
                  <h4>Billing Address</h4> <span>Edit</span>
                  <span>Kampala , Uganda</span>
                  <br />
                  <span>Kabaka Anjagala,rd</span>
                  <br />
                  <span>William st</span>
                  <br />
                  <span>Uganda</span>
              </div>
          </div>
        </div>
        <div className="ordered-items">
          <div className="heading-row">
            <h5>ITEM</h5>
            <h5>QUANTITY</h5>
            <h5>PRICE</h5>
          </div>

          {
            cartProducts.map(({product,product_count})=>(
             
              <div className="row" key={product.product_uuid}>
                  <div className="product">
                      <div className="prod-image">
                      <img src={product.image_url} alt="....." />
                  </div>

                  <div>
                      <small>{(product.name).length > 40?`${product.name.slice(0,40)} ...`:product.name}</small><br />
                      <button onClick={removeCartItem}>{productRemove?<>Removing  <Spinner/></>:"Remove Item"}</button>
                  </div>

                    </div>
                    <span>{product_count}</span>
                    <span><small>KE</small> {product_count*product.discounted_price}</span>

                    <ComfimDeleteDialog message="Do you really want to remove this item?" 
                          title="Remove Item"
                          visible={deleteDialogVisible}
                          onCloseDialog={()=>setDeleteDialogVisible(false)}
                          onComfirm={()=>handleComfirmCartItemDelete(product.product_uuid)}/>
              </div>

              
             )
            )
          }

          
        </div>
      </div>

    
    </>
  );
}

export default CheckOut;
