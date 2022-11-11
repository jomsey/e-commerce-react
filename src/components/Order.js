import React from 'react'

function Order({orderItem,onOrderItemCancel,onViewOrderProducts}) {
  return (
    <div className="item">
    <span>
      <small>
        ID:
        <br />
      </small>
      #{orderItem.id}
    </span>
    <span>
  
      <small>
        DATE:
        <br />
      </small>
     {orderItem.date}
    </span>
    <span>
      <small>
        STATUS:
        <br />
      </small>
     {orderItem.status}
    </span>
    <button onClick={onViewOrderProducts}>View Order Items</button>
    <button onClick={onOrderItemCancel}>Delete Order</button>
  </div>
  )
}


export default Order