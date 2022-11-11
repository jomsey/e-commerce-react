import "./SavedProduct.css"

function SavedProduct () {
    return (
        <div className="saved-product">
            <div className="prod-image">
                <img src="https://api.lorem.space/image/fashion" alt="...." />
            </div>
            <div className="prod-info">
                <span>Product Name</span>
                <br />
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
