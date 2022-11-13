import { products } from "./../utils/sample_products";
import ProductCard from "../components/ProductCard";
import "./ProductsList.css";
import TopBar from "./../components/TopBar";
import Filters from "./../components/Filters";
import Collection from "./../components/Collection";
import { useContext } from "react";
import { ShopContext } from "../shop-context/ShopState";

function ProductsList() {
  const {cartProducts,setCartProducts} = useContext(ShopContext);

   function HandleAddIconToCart(product){
    setCartProducts([...new Set([...cartProducts,product])])
}

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
               onItemAddToCart={()=>HandleAddIconToCart(product)}
            />
          ))}
        </div>
      </div>
      <Collection title={"Rescently Viewed"} productsList={products}/>
    </>
  );
}

export default ProductsList;
