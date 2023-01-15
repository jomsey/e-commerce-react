
function Order({orderItem,onOrderItemCancel,onViewOrderProducts}) {
  return (
    <div className="item">
    <span>
      <small>
        ID:
        <br />
      </small>
      #{orderItem.order_id}
    </span>
    <span>
  
      <small>
        DATE:
        <br />
      </small>
     {new Date(orderItem.date_made).toLocaleDateString()}
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