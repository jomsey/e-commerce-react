import "./OrderedProduct.css"

function OrderedProduct ({product}){
    return (
        <div className="ordered-product">
            <div className="prod-image">
                <img src="https://api.lorem.space/image/fashion" alt="...." />
            </div>
            <span>Product Name </span> 
        </div>
    );
}

export default OrderedProduct;
