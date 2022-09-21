import "./ProductDetails.css";
import RatingRack from "./../ui/RatingRack";
import Collection from "../components/Collection";
import { products } from "./../utils/sample_products";

const ProductDetails = () => {
  return (
    <div className="product-details-page">
      <div className="details">
        <div className="image">
          <img
            src="https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/55/249074/1.jpg?6954"
            alt=""
          />
        </div>

        <div className="info">
          <small>Kitchen</small>
          <h3 className="product-name">
            Fresh Fri Fresh Fri Triple Refined Vegetable Cooking
          </h3>
          <h4 className="price">
            <small>
              <span>-34%</span>
              <br />
              <strike>500 KES</strike>
            </small>
            450 KES
          </h4>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod
            deleniti veniam sequi quis ex optio dolorum nobis ad incidunt,
            itaque necessitatibus, ut libero pariatur? Iste natus, animi
            voluptas deleniti sint accusantium tempora fugiat? Non ullam magnam
            nam natus officiis? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quasi quod deleniti veniam sequi quis ex optio
            dolorum nobis ad incidunt, itaque necessitatibus, ut libero
            pariatur? Iste natus, animi voluptas deleniti sint accusantium
            tempora fugiat? Non ullam magnam nam natus officiis?
          </p>
          <RatingRack rate={4} />
          <div className="buttons">
            <button className="add-to-cart btn">Add To Cart</button>
            <button className="add-to-wishlist btn">Add To Wishlist</button>
          </div>
        </div>
      </div>
      <Collection title={"You May Also Like"} productsList={products} />
      <Collection title={"Previously Viewed"} productsList={products} />
    </div>
  );
};

export default ProductDetails;
