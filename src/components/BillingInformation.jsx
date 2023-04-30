import React from 'react'

export default function BillingInformation() {
  const [editable , setEditable] = React.useState(false)

    return (
           
        <div className="info billing-information">
          <div className="bunch">
          {editable?<button onClick={()=>setEditable(false)}>Save</button>:
                  <button onClick={()=>setEditable(true)}>Edit</button>}
            <div className="personal-info">
                  <h4>Your Information</h4> 
                  <small>FIRST NAME</small>
                  <br />
                  {!editable?<span>Muwanguzi</span>:  <input type="text" name="first_name" placeholder="Muwanguzi" />}
                  <br />
                  <small>SECOND NAME</small>
                  <br />
                  {!editable?<span>Joseph</span>:  <input type="text" name="last_name" placeholder="Joseph" />}
                  <br />
                  <small>EMAIL</small>
                  <br />
                  {!editable? <span>muwanguzijoseph75@gmail.con</span>:  <input type="text" name="first_name" placeholder="muwanguzijoseph75@gmail.con" />}
                  <br />
                  <small>PHONE</small>
                  <br />
                  {!editable?<span>+256 754 608 152</span>:  <input type="text" name="first_name" placeholder="+256 754 608 152" />}
            </div>

            <div className="payment-info">
                  <h4>Payment Information</h4>
                 {!editable?
                 <span>MPESA</span>:
                            <select>
                              <option value="">....</option>
                              <option value="1">PayPal</option>
                              <option value="2">VISA</option>
                              <option value="3">MPESA</option>
                            </select>}
            </div>
          </div>

          <div className="bunch">
              <div className="shipping-address-info">
                      <h4>Shipping Address</h4>
                      {!editable?<span>Kampala , Uganda</span>:
                      <input type="text" name="city" placeholder="Kampala , Uganda" />}
                      <br />
                      {!editable?<span>Kabaka Anjagala,rd</span>:
                      <input type="text" name="city" placeholder="Kabaka Anjagala,rd" />}
                      <br />
                    {!editable? <span>William st</span>:
                      <input type="text" name="street" placeholder="William st" />}
                      <br />
                    {!editable? <span>Uganda</span>:
                      <input type="text" name="country" placeholder="Uganda" />}
              </div>

              <div className="billing-address-info">
                      <h4>Billing Address</h4>
                      {!editable?<span>Kampala , Uganda</span>:
                      <input type="text" name="city" placeholder="Kampala , Uganda" />}
                      <br />
                      {!editable?<span>Kabaka Anjagala,rd</span>:
                      <input type="text" name="city" placeholder="Kabaka Anjagala,rd" />}
                      <br />
                    {!editable? <span>William st</span>:
                      <input type="text" name="street" placeholder="William st" />}
                      <br />
                    {!editable? <span>Uganda</span>:
                      <input type="text" name="country" placeholder="Uganda" />}
              </div>
          </div>
        </div>
        

  )
}
