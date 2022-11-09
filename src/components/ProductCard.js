import Icon from "../ui/Icon";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ image, name, price, discount,onItemAddToCart}) {
  
  const navigate = useNavigate()

  function addProductToWishList(product) {
    console.log(product, " added to wishList");
  }
  
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
            <span onClick={()=>navigate(`/products/${name}`)
} className="detail-btn">DETAILS</span>
            <div className="add-btns">
              <Icon
                extra={"wish-icon"}
                iconName={"heart"}
                onIconClick={() => addProductToWishList(name)}
              />
              <Icon
                extra={"cart-icon"}
                iconName={"shopping-cart"}
                onIconClick={onItemAddToCart}
              />
            </div>
          </div>
        </div>
        {discount > 0 && <span className="product-discount">-{discount}%</span>}

      </div>
   
  );
}

export default ProductCard;
