import "./ProductPlaceholderCard.css";

const ProductPlaceholderCard = () => {
    return (
        <div className="product-card product-placeholder">
        <div className="product-image bg-place">
        </div>
        <div className="container">
          <span className="product-name block bg-place placeholder">
          </span>

          <small className="product-price bg-place block">
          </small>

          <div className="buttons">
            <span className="detail-btn block bg-place placeholder"></span>
            <div className="add-btns">
                <span className="btn bg-place placeholder">
                </span><span className="btn bg-place placeholder"></span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProductPlaceholderCard;
