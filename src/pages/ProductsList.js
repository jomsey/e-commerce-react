import { products } from "./../utils/sample_products";
import ProductCard from "../components/ProductCard";
import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";

function ProductsList() {
  return (
    <>
      <TopBar showToggler={true} />
      <div className="group">
        <Filters />
        <div className="products-list-container">
          {products.map((product) => (
            <ProductCard
              name={product.name}
              price={product.price}
              discount={product.discount}
              image={product.image}
              key={product.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
