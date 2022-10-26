import Icon from "../ui/Icon";
import "./ProductCard.css";
// import increaseCartItemsNumber from "../redux-actions/cart";
// import { useDispatch } from "react-redux";

function addProductToCart(product) {
  console.log(product, " added to cart");
}

function addProductToWishList(product) {
  console.log(product, " added to wishList");
}

function ProductCard({ image, name, price, discount }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>
      <div className="container">
        <span className="product-name">
          {name.length > 40 ? `${name.slice(0, 40)}...` : name}
        </span>

        <small className="product-price">
          <strong>
            {discount > 0 && <strike>{price} KES</strike>} {price} KES
          </strong>
        </small>
        <div className="buttons">
          <div className="add-btns">
            <Icon
              extra={"wish-icon"}
              iconName={"heart"}
              onIconClick={() => addProductToWishList(name)}
            />
            <Icon
              extra={"cart-icon"}
              iconName={"shopping-cart"}
              onIconClick={() => addProductToCart(name)}
            />
          </div>
        </div>
      </div>
      {discount > 0 && <span className="product-discount">-{discount}%</span>}
    </div>
  );
}

export default ProductCard;
