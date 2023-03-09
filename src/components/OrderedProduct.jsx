import "./OrderedProduct.css"

function OrderedProduct ({product}){
    return (
        <div className="ordered-product">
            <div className="prod-image">
                <img src={product.image_url} alt="...." />
            </div>
            <span>{(product.name).length > 20
                    ?`${product.name.slice(0,20)} ...`
                    :product.name}
            </span> 
        </div>
    );
}

export default OrderedProduct;
