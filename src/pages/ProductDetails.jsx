import "./ProductDetails.css";
import RatingRack from "./../ui/RatingRack";
import Collection from "../components/Collection";
import { products } from "./../utils/sample_products";
import getProduct from "./../utils/single_product";
import TopBar from "../components/TopBar";
import { useContext } from 'react';
import { ShopContext } from "../shop-context/ShopState";
import {useParams} from "react-router-dom"

const ProductDetails = () => {
  const {cartProducts,setCartProducts}= useContext(ShopContext)
  const {productName}= useParams()
  const [product]=getProduct(productName)
 

  const AddProductToCart = (product) => {
     setCartProducts([...new Set([...cartProducts,product])])
  };

  const AddProductToWishList = (product) => {
    console.log("added to wishlist");
  };

  

  return (
    <>
      <TopBar showToggler={true} />

      <div className="product-details-page">
        <div className="details">
          <div className="image">
            <img
              src={product.image}
              alt=""
            />
          </div>

          <div className="info">
            <small>Kitchen</small>
            <h3 className="product-name">
            {product.name}
            </h3>
            <h4 className="price">
              <small>
                <span>{product.discount}%</span>
                <br />
                <strike> {product.price} KES</strike>
              </small>{product.price-((product.discount/100)*product.price)}
            KES
            </h4>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              quod deleniti veniam sequi quis ex optio dolorum nobis ad
              incidunt, itaque necessitatibus, ut libero pariatur? Iste natus,
              animi voluptas deleniti sint accusantium tempora fugiat? Non ullam
              magnam nam natus officiis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quasi quod deleniti veniam sequi quis ex optio
              dolorum nobis ad incidunt, itaque necessitatibus, ut libero
              pariatur? Iste natus, animi voluptas deleniti sint accusantium
              tempora fugiat? Non ullam magnam nam natus officiis?
            </p>
            <RatingRack rate={4} />
            <div className="buttons">
              <button onClick={()=>AddProductToCart(product)} className="add-to-cart btn">
                Add To Cart
              </button>
              <button
                onClick={()=>AddProductToWishList("product")}
                className="add-to-wishlist btn"
              >
                Add To Wishlist
              </button>
            </div>
          </div>
        </div>
        <Collection title={"You May Also Like"} productsList={products} />
        <Collection title={"Previously Viewed"} productsList={products} />
      </div>
    </>
  );
};

export default ProductDetails;
