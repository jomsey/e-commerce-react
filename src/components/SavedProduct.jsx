import "./SavedProduct.css"

function SavedProduct () {
    return (
        <div className="saved-product">
            <div className="prod-image">
                <img src="./KE_Clearance_Electronics_0423_S.jpg" alt="...." />
            </div>
            <div className="prod-info">
                <span className="product-name">Lorem ipsum dolor sit ...</span>
                <small>KES: 400</small>
            </div>
            <div className="buttons">
                <button>Add To Cart</button>
                <button>Remove From List</button>
            </div>
            
        </div>
    );
}

export default SavedProduct;
