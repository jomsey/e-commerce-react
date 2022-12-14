import "./Checkout.css";
import TopBar from "../components/TopBar";

function CheckOut() {
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

          <div className="row">
            <div className="product">
              <div className="prod-image">
                <img src="https://api.lorem.space/image/shoes" alt="....." />
              </div>
              <div>
              <small>Product Name</small><br />
              <button>Remove Item</button>
              </div>
            </div>
            <span>5</span>
            <span>
              <small>KE</small> 5000
            </span>
          </div>

          <div className="row">
            <div className="product">
              <div className="prod-image">
                <img src="https://api.lorem.space/image/shoes" alt="....." />
              </div>
              <div>
              <small>Product Name</small><br />
              <button>Remove Item</button>
              </div>
            </div>
            <span>5</span>
            <span>
              <small>KE</small> 5000
            </span>
          </div>

          <div className="row">
            <div className="product">
              <div className="prod-image">
                <img src="https://api.lorem.space/image/shoes" alt="....." />
              </div>
              <div>
              <small>Product Name</small><br />
              <button>Remove Item</button>
              </div>
            </div>
            <span>5</span>
            <span>
              <small>KE</small> 5000
            </span>
          </div>
          <div className="row">
            <div className="product">
              <div className="prod-image">
                <img src="https://api.lorem.space/image/shoes" alt="....." />
              </div>
              <div>
              <small>Product Name</small><br />
              <button>Remove Item</button>
              </div>
            </div>
            <span>5</span>
            <span>
              <small>KE</small> 5000
            </span>
          </div>

          
        </div>
      </div>
    </>
  );
}

export default CheckOut;
