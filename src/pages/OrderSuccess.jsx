import React from 'react'
import TopBar from "../components/TopBar";
import "./OrderSuccess.css"


function OrderSuccess() {
  return (
    <>
        <TopBar showToggler={true} />
        <div className="success-container">OrderSuccess</div>
    </>
  )
}

export default OrderSuccess