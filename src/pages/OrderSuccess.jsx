import React from 'react'
import TopBar from "../components/TopBar";
import "./OrderSuccess.css"
import {useNavigate} from "react-router-dom"


function OrderSuccess() {
  const navigate = useNavigate()
  return (
    <>
        <TopBar showToggler={true} />
        <div className="success-container">

          <h1>Order Successful</h1>
          <p>You have successfully placed your order</p>
          <button onClick={()=>navigate("/products")}>Continue Shopping</button>
        </div>
    </>
  )
}

export default OrderSuccess